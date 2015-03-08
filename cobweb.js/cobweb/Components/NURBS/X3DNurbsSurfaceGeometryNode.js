
define ([
	"jquery",
	"cobweb/Components/NURBS/X3DParametricGeometryNode",
	"cobweb/Bits/X3DConstants",
],
function ($,
          X3DParametricGeometryNode, 
          X3DConstants)
{
	function X3DNurbsSurfaceGeometryNode (browser, executionContext)
	{
		X3DParametricGeometryNode .call (this, browser, executionContext);

		this .addType (X3DConstants .X3DNurbsSurfaceGeometryNode);
	}

	X3DNurbsSurfaceGeometryNode .prototype = $.extend (new X3DParametricGeometryNode (),
	{
		constructor: X3DNurbsSurfaceGeometryNode,
	});

	return X3DNurbsSurfaceGeometryNode;
});
