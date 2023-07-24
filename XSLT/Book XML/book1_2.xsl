<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
   <xsl:template match="@* | node()">
      <xsl:copy>
         <xsl:apply-templates select="node()"/>
      </xsl:copy>
   </xsl:template>
   <xsl:template match="book">
    <xsl:copy>
      <xsl:copy-of select="@*"/>
      <xsl:copy-of select="node()"/>
      <language>English</language>
    </xsl:copy>
  </xsl:template>
</xsl:stylesheet>
 