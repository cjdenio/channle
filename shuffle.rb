#!/usr/bin/env ruby

require 'json'

file = JSON.parse(File.read('src/lib/words.json'))

file.shuffle!

File.write('src/lib/words.json', file.to_json)
