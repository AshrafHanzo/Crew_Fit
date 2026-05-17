import fitz
import os

doc = fitz.open(r'Crew Fit Product Catalog.pdf')
os.makedirs('pdf_images', exist_ok=True)

print(f'Total pages: {len(doc)}')
for i, page in enumerate(doc):
    # Save page as image
    pix = page.get_pixmap(dpi=200)
    pix.save(f'pdf_images/page_{i+1}.png')
    print(f'Saved page {i+1} as image')
    
    # Extract embedded images
    images = page.get_images(full=True)
    print(f'  Page {i+1}: {len(images)} embedded images')
    for j, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        ext = base_image['ext']
        w = base_image['width']
        h = base_image['height']
        img_bytes = base_image['image']
        filename = f'pdf_images/page{i+1}_img{j+1}.{ext}'
        with open(filename, 'wb') as f:
            f.write(img_bytes)
        print(f'  Saved image {j+1}: {w}x{h}, {ext}')

print('Done!')
