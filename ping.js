/<script>
    function ping(){
       $.ajax({
          url: 'ping.html',
          success: function(result){
             alert('reply');
          },     
          error: function(result){
              alert('timeout/error');
          }
       });
    }
</script>/ JavaScript Document