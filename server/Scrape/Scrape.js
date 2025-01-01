import * as cheerio from 'cheerio';
import axios from 'axios';

const scrape = async (req, res) => {
    const { url } = req.body;

    if (!url || !url.startsWith('http')) {
        return res.status(400).json({ error: 'Invalid URL provided' });
    }

    try {
      
        const response = await axios.get(url);
        const html = response.data;

        const $ = cheerio.load(html);

        const title = $('title').text();
        const description = $('meta[name="description"]').attr('content');

        const headings = {};
        for (let i = 1; i <= 6; i++) {
            headings[`h${i}`] = $(`h${i}`).map((_, el) => $(el).text().trim()).get();
        }

        const paragraphs = $('p').map((_, el) => $(el).text().trim()).get();

        const links = $('a').map((_, el) => ({
            text: $(el).text().trim(),
            href: $(el).attr('href'),
        })).get();

        const images = $('img').map((_, el) => $(el).attr('src')).get();

        res.json({
            title: title || 'No title found',
            description: description || 'No description found',
            headings,
            paragraphs,
            links,
            images,
        });
    } catch (error) {
        console.error('Error scraping the URL:', error.message);
        res.status(500).json({ error: 'Failed to scrape the URL' });
    }
};

export default scrape;
