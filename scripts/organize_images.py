"""
Organize extracted images into categorized folders in public/images/
Categories:
  public/images/insulation/   <- Greenville insulation photos (pipes, valves, tank)
  public/images/scaffolding/  <- scaffold and vessel photos
  public/images/labour/       <- welders, fitters, PPE shots
  public/images/civil/        <- roads, drains, roofing, fence, building
  public/images/documents/    <- redacted docs only
"""

import os
import shutil
from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_IMG = os.path.join(ROOT, "public", "extract", "images")
SRC_PAGES = os.path.join(ROOT, "public", "extract", "pages")
PDF_PATH = os.path.join(ROOT, "MERAB PROFILE 1.pdf")
DEST_ROOT = os.path.join(ROOT, "public", "images")

CATEGORIES = ["insulation", "scaffolding", "labour", "civil", "documents"]

def ensure_dirs():
    for cat in CATEGORIES:
        d = os.path.join(DEST_ROOT, cat)
        os.makedirs(d, exist_ok=True)

def copy_or_rotate(src_name, dest_cat, new_name, rotate_degrees=0):
    src_file = os.path.join(SRC_IMG, src_name)
    if not os.path.exists(src_file):
        print(f"Warning: source file not found: {src_file}")
        return False
    
    dest_file = os.path.join(DEST_ROOT, dest_cat, new_name)
    
    if rotate_degrees:
        im = Image.open(src_file)
        # rotate counter-clockwise or clockwise
        rotated = im.rotate(rotate_degrees, expand=True)
        rotated.save(dest_file)
    else:
        shutil.copy2(src_file, dest_file)
    
    print(f"[{dest_cat}] {new_name} <- {src_name}")
    return True

def extract_pdf_images(page_num, dest_cat, prefix):
    """Extract raw embedded images directly from a given page in the PDF."""
    try:
        import fitz
        doc = fitz.open(PDF_PATH)
        page = doc[page_num - 1]
        images = page.get_images()
        for idx, img_info in enumerate(images):
            xref = img_info[0]
            base_image = doc.extract_image(xref)
            ext = base_image["ext"]
            filename = f"{prefix}-{idx+1:02d}.{ext}"
            out_path = os.path.join(DEST_ROOT, dest_cat, filename)
            with open(out_path, "wb") as f:
                f.write(base_image["image"])
            print(f"[{dest_cat}] {filename} (extracted from PDF page {page_num})")
    except Exception as e:
        print(f"Error extracting PDF page {page_num}: {e}")

def redact_document(src_name, new_name, redact_boxes=None):
    """
    Copy a document into public/images/documents/ with private figures,
    rates, or contract values redacted.
    redact_boxes: list of (x0, y0, x1, y1) relative [0..1] coordinates
    """
    src_file = os.path.join(SRC_IMG, src_name)
    if not os.path.exists(src_file):
        # check pages
        page_fallback = os.path.join(SRC_PAGES, src_name)
        if os.path.exists(page_fallback):
            src_file = page_fallback
        else:
            print(f"Warning: doc not found: {src_name}")
            return False

    dest_file = os.path.join(DEST_ROOT, "documents", new_name)
    im = Image.open(src_file).convert("RGB")
    w, h = im.size

    if redact_boxes:
        draw = ImageDraw.Draw(im)
        for box in redact_boxes:
            # box is (rel_x0, rel_y0, rel_x1, rel_y1)
            x0 = int(box[0] * w)
            y0 = int(box[1] * h)
            x1 = int(box[2] * w)
            y1 = int(box[3] * h)
            # Draw navy or black mask
            draw.rectangle([x0, y0, x1, y1], fill=(20, 25, 45))
    
    im.save(dest_file)
    print(f"[documents] {new_name} (redacted) <- {src_name}")
    return True

def organize_all():
    ensure_dirs()
    print("=== 1. Arranging Insulation Photos ===")
    insulation_map = [
        ("p18_1.png", "greenville-pipe-support.png"),
        ("p18_2.png", "greenville-valve-manifold.png"),
        ("p18_3.png", "greenville-pipe-joint.png"),
        ("p19_1.png", "greenville-elbow-insulation.png"),
        ("p19_2.png", "greenville-pipe-rack-run.png"),
        ("p19_3.png", "greenville-pipe-bends.png"),
        ("p19_4.png", "greenville-process-piping.png"),
        ("p20_1.png", "greenville-level-gauge.png"),
        ("p20_2.png", "greenville-valves-manifold.png"),
        ("p20_3.png", "greenville-lng-tank-insulation.png"),
    ]
    for src, dest in insulation_map:
        copy_or_rotate(src, "insulation", dest)

    print("\n=== 2. Arranging Scaffolding Photos ===")
    scaffolding_map = [
        ("p14_1.png", "scaffold-structure-01.png", 0),
        ("p14_2.png", "scaffold-structure-02.png", 0),
        # p16_2 is rotated 90 degrees clockwise in the scan; rotate 270 to make upright
        ("p16_2.png", "scaffold-vessel-and-pipes.png", 270),
    ]
    for item in scaffolding_map:
        src, dest, rot = item
        copy_or_rotate(src, "scaffolding", dest, rot)
    
    # Extract page 15 scaffold photos directly from PDF
    extract_pdf_images(15, "scaffolding", "scaffold-job")

    print("\n=== 3. Arranging Labour & PPE Photos ===")
    # p16_1 has 3 scaffolders/riggers in PPE; rotate 270 to make upright
    copy_or_rotate("p16_1.png", "labour", "labour-ppe-workers-at-height.png", 270)
    copy_or_rotate("p37_1.png", "labour", "labour-safety-training.png", 0)
    copy_or_rotate("p37_2.png", "labour", "labour-toolbox-meeting.png", 0)

    print("\n=== 4. Arranging Civil & Construction Photos ===")
    civil_map = [
        ("p24_1.png", "civil-roof-truss-construction.png"),
        ("p24_2.png", "civil-building-completed.png"),
        ("p24_3.png", "civil-ceiling-installation.png"),
        ("p24_4.png", "civil-perimeter-fence.png"),
        ("p25_1.png", "civil-drainage-channel.png"),
        ("p25_2.png", "civil-concrete-road-01.png"),
        ("p25_3.png", "civil-access-road-02.png"),
        ("p25_4.png", "civil-concrete-road-03.png"),
        ("p36_1.png", "civil-mast-rooftop-erection.png"),
        ("p38_1.png", "civil-generator-installation.png"),
        ("p38_2.png", "civil-generator-electrical-works.png"),
        ("p39_1.png", "civil-tower-and-stones.png"),
    ]
    for src, dest in civil_map:
        copy_or_rotate(src, "civil", dest)

    print("\n=== 5. Arranging Redacted Documents ===")
    # Official certificates (no private rates, public registration records)
    # CAC Certificate of Incorporation (RC 429220)
    copy_or_rotate("p43_1.png", "documents", "cac-certificate-of-incorporation.png")
    # CAC Increase of Share Capital
    copy_or_rotate("p43_2.png", "documents", "cac-increase-share-capital.png")
    # FIRS VAT Certificate
    copy_or_rotate("p46_2.png", "documents", "firs-vat-certificate.png")
    # BPP Interim Registration Report
    copy_or_rotate("p48_2.png", "documents", "bpp-contractor-registration.png")
    # PenCom Certificate
    copy_or_rotate("p47_1.png", "documents", "pencom-clearance-certificate.png")
    # NSITF Certificate
    copy_or_rotate("p41_2.png", "documents", "nsitf-clearance-certificate.png")
    # ITF Certificate
    copy_or_rotate("p41_1.png", "documents", "itf-compliance-certificate.png")
    # NDDC Road Completion Certificate (Project completed, no price)
    copy_or_rotate("p34_1.png", "documents", "nddc-road-completion-certificate.png")

    # Documents with financial values redacted:
    # INEC award letter: redact contract sum
    redact_document(
        "p22_2.png", 
        "inec-award-letter-redacted.png",
        redact_boxes=[(0.18, 0.43, 0.90, 0.50)]
    )
    # NDDC award letter: redact contract sum
    redact_document(
        "p23_2.png", 
        "nddc-award-letter-redacted.png",
        redact_boxes=[(0.40, 0.28, 0.95, 0.35)]
    )
    # Greenville scaffolding contract: redact daily rates
    redact_document(
        "page_05.png",
        "greenville-scaffolding-agreement-redacted.png",
        redact_boxes=[(0.08, 0.59, 0.45, 0.64)]
    )
    # Chemie-Tech Dangote Refinery manpower agreement: redact rate table
    redact_document(
        "page_06.png",
        "chemie-tech-dangote-agreement-redacted.png",
        redact_boxes=[(0.08, 0.40, 0.92, 0.70)]
    )

    print("\nOrganization complete! Summary:")
    for cat in CATEGORIES:
        d = os.path.join(DEST_ROOT, cat)
        files = os.listdir(d) if os.path.exists(d) else []
        print(f"  public/images/{cat}/: {len(files)} files")

if __name__ == "__main__":
    organize_all()
