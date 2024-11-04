document.getElementById('generateButton').addEventListener('click', function() {
    const apiKey = generateApiKey();
    document.getElementById('apiKeyDisplay').textContent = `Your API Key: ${apiKey}`;
});

function generateApiKey() {
    const length = 32;
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        key += charset[randomIndex];
    }
    return key;
}
