const createCookie = (name, value, options = {}) => {
    options = {
      path: "/",
      ...options,
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie =
      encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }
  
  const getCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  const setCookie = () => {
    createCookie("apply-portal-cookie", true, {
      secure: true,
      "max-age": 525600 * 60,
    });
  };
  
  
  const checkCookie = () => {
    if(!getCookie("apply-portal-cookie")){
      let cookieContainer = document.getElementById("cookie-container");
      setTimeout(() => {
        cookieContainer.style.display = "block";
      }, 2000);
    }
  }
  
  checkCookie();
  
  