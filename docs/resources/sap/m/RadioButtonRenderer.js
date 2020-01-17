/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/ValueStateSupport","sap/ui/core/library","sap/ui/Device"],function(e,t,i){"use strict";var r=t.ValueState;var a={};a.render=function(e,t){this.addWOuterDivStyles(e,t);this.addInnerDivStyles(e,t);this.renderSvg(e,t);this.renderInput(e,t);this.closeDiv(e);e.renderControl(t._oLabel);this.renderTooltip(e,t);this.closeDiv(e)};a.addWOuterDivStyles=function(e,t){var i=t.getId(),a=t.getEnabled(),s=!t.getProperty("editableParent"),d=!t.getEditable()||s,l=r.Error===t.getValueState(),n=r.Warning===t.getValueState(),o=r.Success===t.getValueState(),u=r.Information===t.getValueState(),c=t.getUseEntireWidth();e.addClass("sapMRb");e.write("<div");e.writeControlData(t);if(c){e.addStyle("width",t.getWidth());e.writeStyles()}var p=this.getTooltipText(t);if(p){e.writeAttributeEscaped("title",p)}e.writeAccessibilityState(t,{role:"radio",readonly:null,selected:null,checked:t.getSelected(),disabled:d?true:undefined,labelledby:{value:i+"-label",append:true},describedby:{value:p?i+"-Descr":undefined,append:true}});if(t.getSelected()){e.addClass("sapMRbSel")}if(!a){e.addClass("sapMRbDis")}if(d){e.addClass("sapMRbRo")}if(l){e.addClass("sapMRbErr")}if(n){e.addClass("sapMRbWarn")}if(o){e.addClass("sapMRbSucc")}if(u){e.addClass("sapMRbInfo")}e.writeClasses();if(a){e.writeAttribute("tabindex",t.hasOwnProperty("_iTabIndex")?t._iTabIndex:0)}e.write(">")};a.addInnerDivStyles=function(e,t){var r=this.isButtonReadOnly(t);e.write("<div ");e.addClass("sapMRbB");if(!r&&i.system.desktop){e.addClass("sapMRbHoverable")}e.writeClasses();e.write(">")};a.renderSvg=function(e,t){var i=t.getId();e.write("<svg xmlns='http://www.w3.org/2000/svg' version='1.0'");e.addClass("sapMRbSvg");e.writeClasses();e.writeAttribute("role","presentation");e.write(">");e.write('<circle stroke="black" r="50%" stroke-width="2" fill="none"');e.addClass("sapMRbBOut");e.writeAttribute("id",i+"-Button");e.writeClasses();e.write(">");e.write("</circle>");e.write('<circle r="22%" stroke-width="10"');e.addClass("sapMRbBInn");e.writeClasses();e.write(">");e.write("</circle>");e.write("</svg>")};a.renderInput=function(e,t){var i=t.getId(),r=this.isButtonReadOnly(t);e.write("<input type='radio' tabindex='-1'");e.writeAttribute("id",i+"-RB");e.writeAttributeEscaped("name",t.getGroupName());if(t.getSelected()){e.writeAttribute("checked","checked")}if(r){e.writeAttribute("readonly","readonly");e.writeAttribute("disabled","disabled")}e.write(" />")};a.renderTooltip=function(e,t){var i=t.getId(),r=this.getTooltipText(t);if(r&&sap.ui.getCore().getConfiguration().getAccessibility()){e.write('<span id="'+i+'-Descr" style="display: none;">');e.writeEscaped(r);e.write("</span>")}};a.isButtonReadOnly=function(e){var t=e.getEnabled(),i=!e.getProperty("editableParent"),r=!e.getEditable()||i;return!t||r};a.closeDiv=function(e){e.write("</div>")};a.getTooltipText=function(t){var i=t.getProperty("valueStateText"),r=t.getTooltip_AsString();if(i){return(r?r+" - ":"")+i}else{return e.enrichTooltip(t,r)}};return a},true);