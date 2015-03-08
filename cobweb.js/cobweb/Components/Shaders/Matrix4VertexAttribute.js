
define ([
	"jquery",
	"cobweb/Fields",
	"cobweb/Basic/X3DFieldDefinition",
	"cobweb/Basic/FieldDefinitionArray",
	"cobweb/Components/Shaders/X3DVertexAttributeNode",
	"cobweb/Bits/X3DConstants",
],
function ($,
          Fields,
          X3DFieldDefinition,
          FieldDefinitionArray,
          X3DVertexAttributeNode, 
          X3DConstants)
{
	with (Fields)
	{
		function Matrix4VertexAttribute (executionContext)
		{
			X3DVertexAttributeNode .call (this, executionContext .getBrowser (), executionContext);

			this .addType (X3DConstants .Matrix4VertexAttribute);
		}

		Matrix4VertexAttribute .prototype = $.extend (new X3DVertexAttributeNode (),
		{
			constructor: Matrix4VertexAttribute,
			fieldDefinitions: new FieldDefinitionArray ([
				new X3DFieldDefinition (X3DConstants .inputOutput,    "metadata", new SFNode ()),
				new X3DFieldDefinition (X3DConstants .initializeOnly, "name",     new SFString ("")),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "value",    new MFMatrix4f ()),
			]),
			getTypeName: function ()
			{
				return "Matrix4VertexAttribute";
			},
			getComponentName: function ()
			{
				return "Shaders";
			},
			getContainerField: function ()
			{
				return "attrib";
			},
		});

		return Matrix4VertexAttribute;
	}
});
