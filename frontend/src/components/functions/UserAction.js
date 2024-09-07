const handleCopyClick = async (text) => {
    try {
        await window.navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    } catch (err) {
        console.error(
            "Unable to copy to clipboard.",
            err
        );
        alert("Copy to clipboard failed.");
    }
};

export {handleCopyClick};