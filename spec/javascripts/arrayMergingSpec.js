describe('arrayMerge', function() {
  it ('merges two sorted arrays', function() {
    var a = [1, 4, 6];
    var b = [2, 7, 9];

    var c = merge(a,b);

    expect(c).toEqual([1, 2, 4, 6, 7, 9]);
  });

  it ('merges two sorted arrays with a shared value', function() {
    var a1 = [5, 11, 33, 99];
    var a2 = [1, 6, 8, 33];

    var a3 = merge(a1, a2);

    expect(a3).toEqual([1, 5, 6, 8, 11, 33, 33, 99]);
  });

  it ('merges unsorted arrays', function() {
    var arr1 = [30, 41, 4, 62, 57];
    var arr2 = [46, 36, 82, 13, 80];

    var arr3 = merge(arr1, arr2);

    expect(arr3).toEqual([4, 13, 30, 36, 41, 46, 57, 62, 80, 82]);
  });
});
