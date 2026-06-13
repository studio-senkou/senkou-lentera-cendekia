const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
    { search: /text-neutral-darkest/g, replace: 'text-text-heading' },
    { search: /text-neutral-dark/g, replace: 'text-text-secondary' },
    { search: /bg-neutral-lightest/g, replace: 'bg-white-surface' },
    { search: /bg-neutral-lighter/g, replace: 'bg-[#F2F2F2]' }, // Or leave it if I haven't defined
    { search: /border-neutral-light/g, replace: 'border-border-default' },
    { search: /border-neutral-20/g, replace: 'border-border-default' },
    { search: /bg-bright-sun-light/g, replace: 'bg-lentera-orange' },
    { search: /bg-downy-light/g, replace: 'bg-learning-blue' },
    { search: /bg-yellow-orange-light/g, replace: 'bg-deep-navy' },
    { search: /bg-white/g, replace: 'bg-white-surface' },
    { search: /text-neutral-800/g, replace: 'text-text-secondary' },
    { search: /text-neutral-600/g, replace: 'text-text-heading' }
];

function walkDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            // Except for button.tsx and navbar.tsx which I already did
            if (fullPath.includes('button.tsx') || fullPath.includes('navbar.tsx')) {
                return;
            }

            replacements.forEach(r => {
                if (r.search.test(content)) {
                    content = content.replace(r.search, r.replace);
                    modified = true;
                }
            });

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    });
}

walkDir(srcDir);
console.log('Done!');
