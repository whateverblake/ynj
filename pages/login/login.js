Page({
  loginTypeSelect:function(e){
      var radioValue = e.detail.value;
      if(radioValue == "phoneLoginTypeRadio"){
          console.info(document.getElementById(radioValue)) ;
          document.getElementById("normalLoginArea").style.display = "none";
          document.getElementById("smsLoginArea").style.display = "show";
      }
  }
})