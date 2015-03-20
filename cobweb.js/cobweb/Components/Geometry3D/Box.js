
define ([
	"jquery",
	"cobweb/Fields",
	"cobweb/Basic/X3DFieldDefinition",
	"cobweb/Basic/FieldDefinitionArray",
	"cobweb/Components/Rendering/X3DGeometryNode",
	"cobweb/Bits/X3DConstants",
	"standard/Math/Numbers/Vector3",
],
function ($,
          Fields,
          X3DFieldDefinition,
          FieldDefinitionArray,
          X3DGeometryNode,
          X3DConstants,
          Vector3)
{
	with (Fields)
	{
		function Box (executionContext)
		{
			X3DGeometryNode .call (this, executionContext .getBrowser (), executionContext);

			this .addType (X3DConstants .Box);
		}

		Box .prototype = $.extend (new X3DGeometryNode (),
		{
			constructor: Box,
			fieldDefinitions: new FieldDefinitionArray ([
				new X3DFieldDefinition (X3DConstants .inputOutput,    "metadata", new SFNode ()),
				new X3DFieldDefinition (X3DConstants .initializeOnly, "size",     new SFVec3f (2, 2, 2)),
				new X3DFieldDefinition (X3DConstants .initializeOnly, "solid",    new SFBool (true)),
			]),
			getTypeName: function ()
			{
				return "Box";
			},
			getComponentName: function ()
			{
				return "Geometry3D";
			},
			getContainerField: function ()
			{
				return "geometry";
			},
			build: function ()
			{
				var options = this .getBrowser () .getBoxOptions ();

				this .setNormals   (options .getGeometry () .getNormals ());
				this .setTexCoords (options .getGeometry () .getTexCoords ());

				if (this .size_ .getValue () .equals (new Vector3 (2, 2, 2)))
				{
					this .setExtents  (options .getGeometry () .getExtents ());
					this .setVertices (options .getGeometry () .getVertices ());
				}
				else
				{
					var
						scale    = this .size_ .getValue () .copy () .divide (2),
						vertices = options .getGeometry () .getVertices ();

					for (var i = 0; i < vertices .length; i += 4)
						this .addVertex (new Vector3 (vertices [i], vertices [i + 1], vertices [i + 2]) .multVec (scale));
				}

				this .setSolid (this .solid_ .getValue ());
				this .setCurrentTexCoord (null);
			},
		});

		return Box;
	}
});
