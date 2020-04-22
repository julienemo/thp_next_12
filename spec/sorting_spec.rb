require_relative '../sorting'

array1 = [1, -2, 3, -5, 4, 9, -6, 7, 8]
array2 = [48, -2, 6, 12, 0, -4]
array3 = [8763, -133, 246, -714, 42, 42, 2339, -42, 1506, 651, -321]
array4 = [5, 3, 2, 1]

describe 'bubble sort' do
  it 'sorts array in descending order' do
    expect(bubble_sort(array1)).to eq(array1.sort.reverse)
    expect(bubble_sort(array2)).to eq(array2.sort.reverse)
    expect(bubble_sort(array3)).to eq(array3.sort.reverse)
    expect(bubble_sort(array4)).to eq(array4.sort.reverse)
  end
end

# need to delete commented part to run test
=begin describe 'selection sort' do
  it 'sorts array in descending order' do
    expect(selection_sort(array1)).to eq(array1.sort.reverse)
    expect(selection_sort(array2)).to eq(array2.sort.reverse)
    expect(selection_sort(array3)).to eq(array3.sort.reverse)
    expect(selection_sort(array4)).to eq(array4.sort.reverse)
  end
end

describe 'insertion sort' do
  it 'sorts array in descending order' do
    expect(insertion_sort(array1)).to eq(array1.sort.reverse)
    expect(insertion_sort(array2)).to eq(array2.sort.reverse)
    expect(insertion_sort(array3)).to eq(array3.sort.reverse)
    expect(insertion_sort(array4)).to eq(array4.sort.reverse)
  end
end

describe 'quick sort' do
  it 'sorts array in descending order' do
    expect(quick_sort(array1)).to eq(array1.sort.reverse)
    expect(quick_sort(array2)).to eq(array2.sort.reverse)
    expect(quick_sort(array3)).to eq(array3.sort.reverse)
    expect(quick_sort(array4)).to eq(array4.sort.reverse)
  end
end
 =end