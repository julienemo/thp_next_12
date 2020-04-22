# fajhsfkas

require_relative 'sorting'

file_name = ARGV[0]
file = File.open(file_name)
data = file.read.gsub(/[^0-9\-\+\s]/, "").split(" ").to_ary.map{|x| x.to_i}

# execution
bubble_sort(data)
