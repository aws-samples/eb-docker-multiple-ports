<%@ page import="java.util.Properties,
                 java.util.Enumeration,
                 java.util.Map,
                 java.io.*,
                 java.lang.*" %>

<%@ page contentType="text/html; charset=UTF-8" %>
<h1>Hello World from Tomcat app</h1>
<h3>I'm running</h3>
<pre>
<%
	Map<String,String> envMap = System.getenv();
	out.println("Tomcat Version: " +  envMap.get("TOMCAT_VERSION"));
%>
</pre>
