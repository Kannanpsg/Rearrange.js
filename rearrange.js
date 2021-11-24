Function to transform the array
      function fixArray(ar, n) {
        var i, j, temp;
 
        // Iterate over the array
        for (i = 0; i < n; i++)
        {
          for (j = 0; j < n; j++)
          {
           
            // Check is any ar[j]
            // exists such that
            // ar[j] is equal to i
            if (ar[j] == i) {
              temp = ar[j];
              ar[j] = ar[i];
              ar[i] = temp;
              break;
            }
          }
        }
 
        // Iterate over array
        for (i = 0; i < n; i++)
        {
         
          // If not present
          if (ar[i] != i) {
            ar[i] = -1;
          }
        }
 
        // Print the output
        document.write("Array after Rearranging");
        document.write("<br>");
        for (i = 0; i < n; i++) {
          document.write(ar[i] + " ");
        }
      }
 
      // Driver Code
 
      var n,
      ar = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];
      n = ar.length;
 
      // Function Call
      fixArray(ar, n);
