# angular-isolation-poc
POC for running multiple angular 1 applications in one SPA.  
In this project there are several experiments with the ability to host web component within each other, keeping the JS and CSS scopes isolated on the one hand, and allowing full communication and variables references sharing on the other hand.  


The repository contains 4 projects in total, each of them are fully portable and ready to run on current chrome versions:
* iframe_parent_access_demonstration - simple demonstration of how to bypass cross domain errors while accessing window.parent object through an iframe, if the host downloads the iframe's code and creates the iframe himself. Requires nodeJS installed
* shadowDom_is_not_good_inaf_demonstration - While working on this POC, several developers suggested that the iframes approach can be replaced with the Shadow DOM technology. This simple example shows clearly that Shadow DOM provides solution for isolating CSS only, and that all JS code within and outside the Shadow DOM is running on the same scope
* isolate_angular_test - two completely separate angular applications rendering different parts of the main HTML. The interesting concept here is that there is no HTML or JS code running from the iframe's scopes, the only code running there is angular's code, and the reference to angular is passed to the parent window which does all the work
* angular_mdDialog_watches_iframe_test - demonstrates support of more advanced features between two sepreate angular apps: the ability to open mdDialog on the parent window, and usage of watches on variables outside the iframe's scope
