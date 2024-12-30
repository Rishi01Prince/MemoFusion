
// const express = require('express')
// const cheerio = require('cheerio');
import * as cheerio from 'cheerio';

const scrape = async (req, res) => {
    const { url } = req.body;

    // Validate the URL
    if (!url || !url.startsWith('http')) {
        return res.status(400).json({ error: 'Invalid URL provided' });
    }

    try {
        // Fetch the HTML content from the URL
        const response = await axios.get(url);
        const html = response.data;

        // Load the HTML into Cheerio
        const $ = cheerio.load(html);

        // Example: Extract the title and meta description
        const title = $('title').text();
        const description = $('meta[name="description"]').attr('content');

        // Return scraped data
        res.json({
            title: title || 'No title found',
            description: description || 'No description found',
        });
    } catch (error) {
        console.error('Error scraping the URL:', error.message);
        res.status(500).json({ error: 'Failed to scrape the URL' });
    }
}

export default scrape;