#!/usr/bin/python3
""" BasicCache module
"""


BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """ Defines the BasicCache class """

    def put(self, key, item):
        """ Add an item in the cache """
        if key and item:
            self.cache_data[key] = item

    def get(self, key):
        """ Get an item from the cache by its key """
        return self.cache_data.get(key, None)
