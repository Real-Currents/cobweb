
define ([
	"jquery",
	"cobweb/Fields",
	"cobweb/Basic/X3DFieldDefinition",
	"cobweb/Basic/FieldDefinitionArray",
	"cobweb/Components/Followers/X3DChaserNode",
	"cobweb/Bits/X3DConstants",
],
function ($,
          Fields,
          X3DFieldDefinition,
          FieldDefinitionArray,
          X3DChaserNode, 
          X3DConstants)
{
	with (Fields)
	{
		function OrientationChaser (executionContext)
		{
			X3DChaserNode .call (this, executionContext .getBrowser (), executionContext);

			this .addType (X3DConstants .OrientationChaser);
		}

		OrientationChaser .prototype = $.extend (new X3DChaserNode (),
		{
			constructor: OrientationChaser,
			fieldDefinitions: new FieldDefinitionArray ([
				new X3DFieldDefinition (X3DConstants .inputOutput,    "metadata",           new SFNode ()),
				new X3DFieldDefinition (X3DConstants .inputOnly,      "set_value",          new SFRotation ()),
				new X3DFieldDefinition (X3DConstants .inputOnly,      "set_destination",    new SFRotation ()),
				new X3DFieldDefinition (X3DConstants .initializeOnly, "initialValue",       new SFRotation (0, 0, 1, 0)),
				new X3DFieldDefinition (X3DConstants .initializeOnly, "initialDestination", new SFRotation (0, 0, 1, 0)),
				new X3DFieldDefinition (X3DConstants .initializeOnly, "duration",           new SFTime (1)),
				new X3DFieldDefinition (X3DConstants .outputOnly,     "isActive",           new SFBool ()),
				new X3DFieldDefinition (X3DConstants .outputOnly,     "value_changed",      new SFRotation ()),
			]),
			getTypeName: function ()
			{
				return "OrientationChaser";
			},
			getComponentName: function ()
			{
				return "Followers";
			},
			getContainerField: function ()
			{
				return "children";
			},
		});

		return OrientationChaser;
	}
});
