/* HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */ (function(l,f){function w(a,b){var c=a.createElement("p"),m=a.getElementsByTagName("head")[0]||a.documentElement;c.innerHTML="x<style>"+b+"</style>";return m.insertBefore(c.lastChild,m.firstChild)}function p(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function n(a){var b=x[a[y]];b||(b={},r++,a[y]=r,x[r]=b);return b}function z(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=n(b));b=c.cache[a]?c.cache[a].cloneNode():C.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a); return b.canHaveChildren&&!D.test(a)?c.frag.appendChild(b):b}function A(a){a||(a=f);var b=n(a);e.shivCSS&&(!s&&!b.hasCSS)&&(b.hasCSS=!!w(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}"));if(!g){var c=a;b.cache||(b.cache={},b.createElem=c.createElement,b.createFrag=c.createDocumentFragment,b.frag=b.createFrag());c.createElement=function(a){return!e.shivMethods?b.createElem(a):z(a,c,b)};c.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+ p().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}return a}function E(a){for(var b,c=a.attributes,m=c.length,f=a.ownerDocument.createElement(q+":"+a.nodeName);m--;)b=c[m],b.specified&&f.setAttribute(b.nodeName,b.nodeValue);f.style.cssText=a.style.cssText;return f}function B(a){function b(){clearTimeout(d._removeSheetTimer);c&&c.removeNode(!0);c=null}var c,f,d=n(a),e=a.namespaces,g=a.parentWindow;if(!F||a.printShived)return a; "undefined"==typeof e[q]&&e.add(q);g.attachEvent("onbeforeprint",function(){b();var h,k,d;d=a.styleSheets;for(var e=[],j=d.length,g=Array(j);j--;)g[j]=d[j];for(;d=g.pop();)if(!d.disabled&&G.test(d.media)){try{h=d.imports,k=h.length}catch(n){k=0}for(j=0;j<k;j++)g.push(h[j]);try{e.push(d.cssText)}catch(l){}}h=e.reverse().join("").split("{");k=h.length;j=RegExp("(^|[\\s,>+~])("+p().join("|")+")(?=[[\\s,>+~#.:]|$)","gi");for(g="$1"+q+"\\:$2";k--;)e=h[k]=h[k].split("}"),e[e.length-1]=e[e.length-1].replace(j, g),h[k]=e.join("}");e=h.join("{");k=a.getElementsByTagName("*");j=k.length;g=RegExp("^(?:"+p().join("|")+")$","i");for(d=[];j--;)h=k[j],g.test(h.nodeName)&&d.push(h.applyElement(E(h)));f=d;c=w(a,e)});g.attachEvent("onafterprint",function(){for(var a=f,c=a.length;c--;)a[c].removeNode();clearTimeout(d._removeSheetTimer);d._removeSheetTimer=setTimeout(b,500)});a.printShived=!0;return a}var d=l.html5||{},D=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,C=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, s,y="_html5shiv",r=0,x={},g;try{var t=f.createElement("a");t.innerHTML="<xyz></xyz>";s="hidden"in t;var u;if(!(u=1==t.childNodes.length)){f.createElement("a");var v=f.createDocumentFragment();u="undefined"==typeof v.cloneNode||"undefined"==typeof v.createDocumentFragment||"undefined"==typeof v.createElement}g=u}catch(H){g=s=!0}var e={elements:d.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video", version:"3.6.2pre",shivCSS:!1!==d.shivCSS,supportsUnknownElements:g,shivMethods:!1!==d.shivMethods,type:"default",shivDocument:A,createElement:z,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();b=b||n(a);for(var c=b.frag.cloneNode(),d=0,e=p(),l=e.length;d<l;d++)c.createElement(e[d]);return c}};l.html5=e;A(f);var G=/^$|\b(?:all|print)\b/,q="html5shiv";if(d=!g)d=f.documentElement,d=!("undefined"==typeof f.namespaces||"undefined"==typeof f.parentWindow||"undefined"== typeof d.applyElement||"undefined"==typeof d.removeNode||"undefined"==typeof l.attachEvent);var F=d;e.type+=" print";e.shivPrint=B;B(f)})(this,document);

/*
selectivizr v1.0.3b - (c) Keith Clark, freely distributable under the terms
of the MIT license.

selectivizr.com
*/
/*

Notes about this source
-----------------------

 * The #DEBUG_START and #DEBUG_END comments are used to mark blocks of code
   that will be removed prior to building a final release version (using a
   pre-compression script)


References:
-----------

 * CSS Syntax          : http://www.w3.org/TR/2003/WD-css3-syntax-20030813/#style
 * Selectors           : http://www.w3.org/TR/css3-selectors/#selectors
 * IE Compatability    : http://msdn.microsoft.com/en-us/library/cc351024(VS.85).aspx
 * W3C Selector Tests  : http://www.w3.org/Style/CSS/Test/CSS3/Selectors/current/html/tests/

*/

(function(win) {

  // Determine IE version and stop execution if browser isn't IE. This
  // handles the script being loaded by non IE browsers because the
  // developer didn't use conditional comments.
  var ieUserAgent = navigator.userAgent.match(/MSIE (\d+)/);
  if (!ieUserAgent) {
    return false;
  }

  // =========================== Init Objects ============================

  var doc = document;
  var root = doc.documentElement;
  var xhr = getXHRObject();
  var ieVersion = ieUserAgent[1];

  // If were not in standards mode, IE is too old / new or we can't create
  // an XMLHttpRequest object then we should get out now.
  if (doc.compatMode != 'CSS1Compat' || ieVersion<6 || ieVersion>8 || !xhr) {
    return;
  }


  // ========================= Common Objects ============================

  // Compatiable selector engines in order of CSS3 support. Note: '*' is
  // a placholder for the object key name. (basically, crude compression)
  var selectorEngines = {
    "NW"								: "*.Dom.select",
    "MooTools"							: "$$",
    "DOMAssistant"						: "*.$",
    "Prototype"							: "$$",
    "YAHOO"								: "*.util.Selector.query",
    "Sizzle"							: "*",
    "jQuery"							: "*",
    "dojo"								: "*.query"
  };

  var selectorMethod;
  var enabledWatchers 					= [];     // array of :enabled/:disabled elements to poll
  var domPatches							= [];
  var ie6PatchID 							= 0;      // used to solve ie6's multiple class bug
  var patchIE6MultipleClasses				= true;   // if true adds class bloat to ie6
  var namespace 							= "slvzr";

  // Stylesheet parsing regexp's
  var RE_COMMENT							= /(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*?/g;
  var RE_IMPORT							= /@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))\s*([^;]*);/g;
  var RE_ASSET_URL 						= /(behavior\s*?:\s*)?\burl\(\s*(["']?)(?!data:)([^"')]+)\2\s*\)/g;
  var RE_PSEUDO_STRUCTURAL				= /^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/;
  var RE_PSEUDO_ELEMENTS					= /:(:first-(?:line|letter))/g;
  var RE_SELECTOR_GROUP					= /((?:^|(?:\s*})+)(?:\s*@media[^{]+{)?)\s*([^\{]*?[\[:][^{]+)/g;
  var RE_SELECTOR_PARSE					= /([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g;
  var RE_LIBRARY_INCOMPATIBLE_PSEUDOS		= /(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g;
  var RE_PATCH_CLASS_NAME_REPLACE			= /[^\w-]/g;

  // HTML UI element regexp's
  var RE_INPUT_ELEMENTS					= /^(INPUT|SELECT|TEXTAREA|BUTTON)$/;
  var RE_INPUT_CHECKABLE_TYPES			= /^(checkbox|radio)$/;

  // Broken attribute selector implementations (IE7/8 native [^=""], [$=""] and [*=""])
  var BROKEN_ATTR_IMPLEMENTATIONS			= ieVersion>6 ? /[\$\^*]=(['"])\1/ : null;

  // Whitespace normalization regexp's
  var RE_TIDY_TRAILING_WHITESPACE			= /([(\[+~])\s+/g;
  var RE_TIDY_LEADING_WHITESPACE			= /\s+([)\]+~])/g;
  var RE_TIDY_CONSECUTIVE_WHITESPACE		= /\s+/g;
  var RE_TIDY_TRIM_WHITESPACE				= /^\s*((?:[\S\s]*\S)?)\s*$/;

  // String constants
  var EMPTY_STRING						= "";
  var SPACE_STRING						= " ";
  var PLACEHOLDER_STRING					= "$1";

  // =========================== Patching ================================

  // --[ patchStyleSheet() ]----------------------------------------------
  // Scans the passed cssText for selectors that require emulation and
  // creates one or more patches for each matched selector.
  function patchStyleSheet( cssText ) {
    return cssText.replace(RE_PSEUDO_ELEMENTS, PLACEHOLDER_STRING).
      replace(RE_SELECTOR_GROUP, function(m, prefix, selectorText) {
          var selectorGroups = selectorText.split(",");
          for (var c = 0, cs = selectorGroups.length; c < cs; c++) {
            var selector = normalizeSelectorWhitespace(selectorGroups[c]) + SPACE_STRING;
            var patches = [];
            selectorGroups[c] = selector.replace(RE_SELECTOR_PARSE,
              function(match, combinator, pseudo, attribute, index) {
                if (combinator) {
                  if (patches.length>0) {
                    domPatches.push( { selector: selector.substring(0, index), patches: patches } )
                    patches = [];
                  }
                  return combinator;
                }
                else {
                  var patch = (pseudo) ? patchPseudoClass( pseudo ) : patchAttribute( attribute );
                  if (patch) {
                    patches.push(patch);
                    return "." + patch.className;
                  }
                  return match;
                }
              }
            );
          }
          return prefix + selectorGroups.join(",");
        });
  };

  // --[ patchAttribute() ]-----------------------------------------------
  // returns a patch for an attribute selector.
  function patchAttribute( attr ) {
    return (!BROKEN_ATTR_IMPLEMENTATIONS || BROKEN_ATTR_IMPLEMENTATIONS.test(attr)) ?
      { className: createClassName(attr), applyClass: true } : null;
  };

  // --[ patchPseudoClass() ]---------------------------------------------
  // returns a patch for a pseudo-class
  function patchPseudoClass( pseudo ) {

    var applyClass = true;
    var className = createClassName(pseudo.slice(1));
    var isNegated = pseudo.substring(0, 5) == ":not(";
    var activateEventName;
    var deactivateEventName;

    // if negated, remove :not()
    if (isNegated) {
      pseudo = pseudo.slice(5, -1);
    }

    // bracket contents are irrelevant - remove them
    var bracketIndex = pseudo.indexOf("(")
    if (bracketIndex > -1) {
      pseudo = pseudo.substring(0, bracketIndex);
    }

    // check we're still dealing with a pseudo-class
    if (pseudo.charAt(0) == ":") {
      switch (pseudo.slice(1)) {

        case "root":
          applyClass = function(e) {
            return isNegated ? e != root : e == root;
          }
          break;

        case "target":
          // :target is only supported in IE8
          if (ieVersion == 8) {
            applyClass = function(e) {
              var handler = function() {
                var hash = location.hash;
                var hashID = hash.slice(1);
                return isNegated ? (hash == EMPTY_STRING || e.id != hashID) : (hash != EMPTY_STRING && e.id == hashID);
              };
              addEvent( win, "hashchange", function() {
                toggleElementClass(e, className, handler());
              })
              return handler();
            }
            break;
          }
          return false;

        case "checked":
          applyClass = function(e) {
            if (RE_INPUT_CHECKABLE_TYPES.test(e.type)) {
              addEvent( e, "propertychange", function() {
                if (event.propertyName == "checked") {
                  toggleElementClass( e, className, e.checked !== isNegated );
                }
              })
            }
            return e.checked !== isNegated;
          }
          break;

        case "disabled":
          isNegated = !isNegated;

        case "enabled":
          applyClass = function(e) {
            if (RE_INPUT_ELEMENTS.test(e.tagName)) {
              addEvent( e, "propertychange", function() {
                if (event.propertyName == "$disabled") {
                  toggleElementClass( e, className, e.$disabled === isNegated );
                }
              });
              enabledWatchers.push(e);
              e.$disabled = e.disabled;
              return e.disabled === isNegated;
            }
            return pseudo == ":enabled" ? isNegated : !isNegated;
          }
          break;

        case "focus":
          activateEventName = "focus";
          deactivateEventName = "blur";

        case "hover":
          if (!activateEventName) {
            activateEventName = "mouseenter";
            deactivateEventName = "mouseleave";
          }
          applyClass = function(e) {
            addEvent( e, isNegated ? deactivateEventName : activateEventName, function() {
              toggleElementClass( e, className, true );
            })
            addEvent( e, isNegated ? activateEventName : deactivateEventName, function() {
              toggleElementClass( e, className, false );
            })
            return isNegated;
          }
          break;

        // everything else
        default:
          // If we don't support this pseudo-class don't create
          // a patch for it
          if (!RE_PSEUDO_STRUCTURAL.test(pseudo)) {
            return false;
          }
          break;
      }
    }
    return { className: className, applyClass: applyClass };
  };

  // --[ applyPatches() ]-------------------------------------------------
  function applyPatches() {
    var elms, selectorText, patches, domSelectorText;

    for (var c=0; c<domPatches.length; c++) {
      selectorText = domPatches[c].selector;
      patches = domPatches[c].patches;

      // Although some selector libraries can find :checked :enabled etc.
      // we need to find all elements that could have that state because
      // it can be changed by the user.
      domSelectorText = selectorText.replace(RE_LIBRARY_INCOMPATIBLE_PSEUDOS, EMPTY_STRING);

      // If the dom selector equates to an empty string or ends with
      // whitespace then we need to append a universal selector (*) to it.
      if (domSelectorText == EMPTY_STRING || domSelectorText.charAt(domSelectorText.length - 1) == SPACE_STRING) {
        domSelectorText += "*";
      }

      // Ensure we catch errors from the selector library
      try {
        elms = selectorMethod( domSelectorText );
      } catch (ex) {
        // #DEBUG_START
        log( "Selector '" + selectorText + "' threw exception '" + ex + "'" );
        // #DEBUG_END
      }


      if (elms) {
        for (var d = 0, dl = elms.length; d < dl; d++) {
          var elm = elms[d];
          var cssClasses = elm.className;
          for (var f = 0, fl = patches.length; f < fl; f++) {
            var patch = patches[f];
            if (!hasPatch(elm, patch)) {
              if (patch.applyClass && (patch.applyClass === true || patch.applyClass(elm) === true)) {
                cssClasses = toggleClass(cssClasses, patch.className, true );
              }
            }
          }
          elm.className = cssClasses;
        }
      }
    }
  };

  // --[ hasPatch() ]-----------------------------------------------------
  // checks for the exsistence of a patch on an element
  function hasPatch( elm, patch ) {
    return new RegExp("(^|\\s)" + patch.className + "(\\s|$)").test(elm.className);
  };


  // =========================== Utility =================================

  function createClassName( className ) {
    return namespace + "-" + ((ieVersion == 6 && patchIE6MultipleClasses) ?
      ie6PatchID++
    :
      className.replace(RE_PATCH_CLASS_NAME_REPLACE, function(a) { return a.charCodeAt(0) }));
  };

  // --[ log() ]----------------------------------------------------------
  // #DEBUG_START
  function log( message ) {
    if (win.console) {
      win.console.log(message);
    }
  };
  // #DEBUG_END

  // --[ trim() ]---------------------------------------------------------
  // removes leading, trailing whitespace from a string
  function trim( text ) {
    return text.replace(RE_TIDY_TRIM_WHITESPACE, PLACEHOLDER_STRING);
  };

  // --[ normalizeWhitespace() ]------------------------------------------
  // removes leading, trailing and consecutive whitespace from a string
  function normalizeWhitespace( text ) {
    return trim(text).replace(RE_TIDY_CONSECUTIVE_WHITESPACE, SPACE_STRING);
  };

  // --[ normalizeSelectorWhitespace() ]----------------------------------
  // tidies whitespace around selector brackets and combinators
  function normalizeSelectorWhitespace( selectorText ) {
    return normalizeWhitespace(selectorText.
      replace(RE_TIDY_TRAILING_WHITESPACE, PLACEHOLDER_STRING).
      replace(RE_TIDY_LEADING_WHITESPACE, PLACEHOLDER_STRING)
    );
  };

  // --[ toggleElementClass() ]-------------------------------------------
  // toggles a single className on an element
  function toggleElementClass( elm, className, on ) {
    var oldClassName = elm.className;
    var newClassName = toggleClass(oldClassName, className, on);
    if (newClassName != oldClassName) {
      elm.className = newClassName;
      elm.parentNode.className += EMPTY_STRING;
    }
  };

  // --[ toggleClass() ]--------------------------------------------------
  // adds / removes a className from a string of classNames. Used to
  // manage multiple class changes without forcing a DOM redraw
  function toggleClass( classList, className, on ) {
    var re = RegExp("(^|\\s)" + className + "(\\s|$)");
    var classExists = re.test(classList);
    if (on) {
      return classExists ? classList : classList + SPACE_STRING + className;
    } else {
      return classExists ? trim(classList.replace(re, PLACEHOLDER_STRING)) : classList;
    }
  };

  // --[ addEvent() ]-----------------------------------------------------
  function addEvent(elm, eventName, eventHandler) {
    elm.attachEvent("on" + eventName, eventHandler);
  };

  // --[ getXHRObject() ]-------------------------------------------------
  function getXHRObject() {
    if (win.XMLHttpRequest) {
      return new XMLHttpRequest;
    }
    try	{
      return new ActiveXObject('Microsoft.XMLHTTP');
    } catch(e) {
      return null;
    }
  };

  // --[ loadStyleSheet() ]-----------------------------------------------
  function loadStyleSheet( url ) {
    xhr.open("GET", url, false);
    xhr.send();
    return (xhr.status==200) ? xhr.responseText : EMPTY_STRING;
  };

  // --[ resolveUrl() ]---------------------------------------------------
  // Converts a URL fragment to a fully qualified URL using the specified
  // context URL. Returns null if same-origin policy is broken
  function resolveUrl( url, contextUrl, ignoreSameOriginPolicy ) {

    function getProtocol( url ) {
      return url.substring(0, url.indexOf("//"));
    };

    function getProtocolAndHost( url ) {
      return url.substring(0, url.indexOf("/", 8));
    };

    if (!contextUrl) {
      contextUrl = baseUrl;
    }

    // protocol-relative path
    if (url.substring(0,2)=="//") {
      url = getProtocol(contextUrl) + url;
    }

    // absolute path
    if (/^https?:\/\//i.test(url)) {
      return !ignoreSameOriginPolicy && getProtocolAndHost(contextUrl) != getProtocolAndHost(url) ? null : url ;
    }

    // root-relative path
    if (url.charAt(0)=="/")	{
      return getProtocolAndHost(contextUrl) + url;
    }

    // relative path
    var contextUrlPath = contextUrl.split(/[?#]/)[0]; // ignore query string in the contextUrl
    if (url.charAt(0) != "?" && contextUrlPath.charAt(contextUrlPath.length - 1) != "/") {
      contextUrlPath = contextUrlPath.substring(0, contextUrlPath.lastIndexOf("/") + 1);
    }

    return contextUrlPath + url;
  };

  // --[ parseStyleSheet() ]----------------------------------------------
  // Downloads the stylesheet specified by the URL, removes it's comments
  // and recursivly replaces @import rules with their contents, ultimately
  // returning the full cssText.
  function parseStyleSheet( url ) {
    if (url) {
      return loadStyleSheet(url).replace(RE_COMMENT, EMPTY_STRING).
      replace(RE_IMPORT, function( match, quoteChar, importUrl, quoteChar2, importUrl2, media ) {
        var cssText = parseStyleSheet(resolveUrl(importUrl || importUrl2, url));
        return (media) ? "@media " + media + " {" + cssText + "}" : cssText;
      }).
      replace(RE_ASSET_URL, function( match, isBehavior, quoteChar, assetUrl ) {
        quoteChar = quoteChar || EMPTY_STRING;
        return isBehavior ? match : " url(" + quoteChar + resolveUrl(assetUrl, url, true) + quoteChar + ") ";
      });
    }
    return EMPTY_STRING;
  };

  // --[ getStyleSheets() ]-----------------------------------------------
  function getStyleSheets() {
    var url, stylesheet;
    for (var c = 0; c < doc.styleSheets.length; c++) {
      stylesheet = doc.styleSheets[c];
      if (stylesheet.href != EMPTY_STRING) {
        url = resolveUrl(stylesheet.href);
        if (url) {
          stylesheet.cssText = stylesheet["rawCssText"] = patchStyleSheet( parseStyleSheet( url ) );
        }
      }
    }
  };

  // --[ init() ]---------------------------------------------------------
  function init() {
    applyPatches();

    // :enabled & :disabled polling script (since we can't hook
    // onpropertychange event when an element is disabled)
    if (enabledWatchers.length > 0) {
      setInterval( function() {
        for (var c = 0, cl = enabledWatchers.length; c < cl; c++) {
          var e = enabledWatchers[c];
          if (e.disabled !== e.$disabled) {
            if (e.disabled) {
              e.disabled = false;
              e.$disabled = true;
              e.disabled = true;
            }
            else {
              e.$disabled = e.disabled;
            }
          }
        }
      }, 250)
    }
  };

  // Determine the baseUrl and download the stylesheets
  var baseTags = doc.getElementsByTagName("BASE");
  var baseUrl = (baseTags.length > 0) ? baseTags[0].href : doc.location.href;
  getStyleSheets();

  // Bind selectivizr to the ContentLoaded event.
  ContentLoaded(win, function() {
    // Determine the "best fit" selector engine
    for (var engine in selectorEngines) {
      var members, member, context = win;
      if (win[engine]) {
        members = selectorEngines[engine].replace("*", engine).split(".");
        while ((member = members.shift()) && (context = context[member])) {}
        if (typeof context == "function") {
          selectorMethod = context;
          init();
          return;
        }
      }
    }
  });



  /*!
   * ContentLoaded.js by Diego Perini, modified for IE<9 only (to save space)
   *
   * Author: Diego Perini (diego.perini at gmail.com)
   * Summary: cross-browser wrapper for DOMContentLoaded
   * Updated: 20101020
   * License: MIT
   * Version: 1.2
   *
   * URL:
   * http://javascript.nwbox.com/ContentLoaded/
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
   *
   */

  // @w window reference
  // @f function reference
  function ContentLoaded(win, fn) {

    var done = false, top = true,
    init = function(e) {
      if (e.type == "readystatechange" && doc.readyState != "complete") return;
      (e.type == "load" ? win : doc).detachEvent("on" + e.type, init, false);
      if (!done && (done = true)) fn.call(win, e.type || e);
    },
    poll = function() {
      try { root.doScroll("left"); } catch(e) { setTimeout(poll, 50); return; }
      init('poll');
    };

    if (doc.readyState == "complete") fn.call(win, EMPTY_STRING);
    else {
      if (doc.createEventObject && root.doScroll) {
        try { top = !win.frameElement; } catch(e) { }
        if (top) poll();
      }
      addEvent(doc,"readystatechange", init);
      addEvent(win,"load", init);
    }
  };
})(this);

/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2013 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */

!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){v(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},g=function(a){return a.replace(c.regex.minmaxwh,"").match(c.regex.other)};if(c.ajax=f,c.queue=d,c.unsupportedmq=g,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var h,i,j,k=a.document,l=k.documentElement,m=[],n=[],o=[],p={},q=30,r=k.getElementsByTagName("head")[0]||l,s=k.getElementsByTagName("base")[0],t=r.getElementsByTagName("link"),u=function(){var a,b=k.createElement("div"),c=k.body,d=l.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=k.createElement("body"),c.style.background="none"),l.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&l.insertBefore(c,l.firstChild),a=b.offsetWidth,f?l.removeChild(c):c.removeChild(b),l.style.fontSize=d,e&&(c.style.fontSize=e),a=j=parseFloat(a)},v=function(b){var c="clientWidth",d=l[c],e="CSS1Compat"===k.compatMode&&d||k.body[c]||d,f={},g=t[t.length-1],p=(new Date).getTime();if(b&&h&&q>p-h)return a.clearTimeout(i),i=a.setTimeout(v,q),void 0;h=p;for(var s in m)if(m.hasOwnProperty(s)){var w=m[s],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?j||u():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?j||u():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(n[w.rules]))}for(var C in o)o.hasOwnProperty(C)&&o[C]&&o[C].parentNode===r&&r.removeChild(o[C]);o.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=k.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,r.insertBefore(E,g.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(k.createTextNode(F)),o.push(E)}},w=function(a,b,d){var e=a.replace(c.regex.comments,"").replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},i=!f&&d;b.length&&(b+="/"),i&&(f=1);for(var j=0;f>j;j++){var k,l,o,p;i?(k=d,n.push(h(a))):(k=e[j].match(c.regex.findStyles)&&RegExp.$1,n.push(RegExp.$2&&h(RegExp.$2))),o=k.split(","),p=o.length;for(var q=0;p>q;q++)l=o[q],g(l)||m.push({media:l.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:n.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}v()},x=function(){if(d.length){var b=d.shift();f(b.href,function(c){w(c,b.href,b.media),p[b.href]=!0,a.setTimeout(function(){x()},0)})}},y=function(){for(var b=0;b<t.length;b++){var c=t[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!p[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(w(c.styleSheet.rawCssText,e,f),p[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!s||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}x()};y(),c.update=y,c.getEmValue=u,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);