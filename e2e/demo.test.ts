import { expect, test } from '@playwright/test';
import * as fs from 'fs';

test('export homepage as pdf in A4 format', async ({ page }) => {
	await page.goto('/');

	await page.waitForLoadState('networkidle');
	
	// Step 2: Create the PDF with the embedded font in SVG footer
	const pdfBuffer = await page.pdf({
		format: 'A4',
		printBackground: true,
		displayHeaderFooter: true,
		footerTemplate: `
	  <svg width="100%" height="20" xmlns="http://www.w3.org/2000/svg">
	  	<rect width="100%" height="20" fill="transparent"></rect>
		<text 
		  x="50%" 
		  y="50%" 
		  dominant-baseline="middle" 
		  text-anchor="middle" 
		  fill="white" 
		  font-size="12px"
		  font-weight="900"
		  opacity="0.5"
		>
		  <tspan class="pageNumber"></tspan> / <tspan class="totalPages"></tspan>
		</text>
	  </svg>
	`
	});

	// output path of file is `${projectSrc}/document.pdf`
	fs.writeFileSync('document.pdf', pdfBuffer);
	
	expect(pdfBuffer.length).toBeGreaterThan(0);
});


