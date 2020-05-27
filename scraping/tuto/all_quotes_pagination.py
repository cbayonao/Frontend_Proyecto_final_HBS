# -*- coding: utf-8 -*-
import scrapy


class AllQuotesSpider(scrapy.Spider):
    name = 'all_quotes'
    start_urls = ['http://quotes.toscrape.com/']

    def parse(self, response):
        quotes  = response.css('.quote')

        for quote in quotes:
            item = {
                'author' : quote.css('.author ::text').get(),
                'quote' :  quote.css('.text ::text').get(),
                'tags' :  quote.css('.tag ::text').get(),
            }

            yield item # Important: This statement is inside the for loop

        next_page_url = response.css('li.next > a::attr(href)').get()
        if next_page_url:
            next_page_url = response.urljoin(next_page_url)
            yield scrapy.Request(url=next_page_url, callback=self.parse)
