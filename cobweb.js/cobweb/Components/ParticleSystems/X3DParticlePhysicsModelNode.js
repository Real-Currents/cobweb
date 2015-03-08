
define ([
	"jquery",
	"cobweb/Components/Core/X3DNode",
	"cobweb/Bits/X3DConstants",
],
function ($,
          X3DNode, 
          X3DConstants)
{
	function X3DParticlePhysicsModelNode (browser, executionContext)
	{
		X3DNode .call (this, browser, executionContext);

		this .addType (X3DConstants .X3DParticlePhysicsModelNode);
	}

	X3DParticlePhysicsModelNode .prototype = $.extend (new X3DNode (),
	{
		constructor: X3DParticlePhysicsModelNode,
	});

	return X3DParticlePhysicsModelNode;
});
