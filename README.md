# Elite Auto Detailing Website V5

V5 fixes the Build Your Detail crash.

## What changed

- Removed the buggy dynamic vehicle/model logic completely
- Rebuilt `/build-your-detail/page.tsx` with safer typed pricing
- Vehicle selection is now simple:
  - Small
  - Medium
  - Large
  - XL
- Quote calculator works from the selected size
- WhatsApp booking still sends selections to 07988770864

## Replace these files in GitHub

If you already have V4 uploaded, you only need to replace:

```bash
app/build-your-detail/page.tsx
package.json
README.md
```

## Logo

Keep your logo here:

```bash
public/logo.png
```

## Run

```bash
npm install
npm run dev
```
