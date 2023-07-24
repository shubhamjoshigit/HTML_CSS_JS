<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
 <xsl:template match="node()">
  <xsl:copy>
   <xsl:apply-templates select="node()"/>
  </xsl:copy>
 </xsl:template>
 <xsl:template match="world/bookstore/book">
 <xsl:choose>
  <xsl:when test="year">
  <xsl:copy>
   <xsl:apply-templates select="node()"/>
  </xsl:copy>
  </xsl:when>

  <xsl:otherwise>
    <xsl:copy>
      <xsl:copy-of select="@*"/>
      <xsl:copy-of select="node()"/>
      <year></year>
    </xsl:copy>
  </xsl:otherwise>
</xsl:choose>
</xsl:template>
</xsl:stylesheet>