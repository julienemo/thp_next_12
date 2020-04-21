# fajhsfkas


def bubble_sort(array)
  length = array.length
  continue = false
  count = 0
  (0..length - 1).each do |i|
    return array unless continue

    (0..length - 1).each do |m|
      count += 1
      puts count
      if array[m] < array[m + 1]
        array[m], array[m + 1] = array[m + 1], array[m]
        continue = true
      end
    end
  end
  array
end

file_name = ARGV[0]
file = File.open(file_name)
data = file.read.gsub(/[^0-9\-\+\s]/, "").split(" ").to_ary.map{|x| x.to_i}

p bubble_sort(data)