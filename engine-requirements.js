const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
    const red = '\x1b[31m';
    const yellow = '\x1b[33m';
    const bold = '\x1b[1m';
    const reset = '\x1b[0m';

    console.error(`
${bold}${red}❌ ERROR: Node.js Version Too Low!${reset}

${yellow}You are using Node.js ${red}${process.versions.node}${reset}${yellow}.
This package requires Node.js ${bold}20+${reset}${yellow} to run reliably.

Please upgrade Node.js to continue! ⚡
`);
    process.exit(1);
}
