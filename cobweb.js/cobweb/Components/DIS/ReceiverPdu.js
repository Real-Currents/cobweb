
define ([
	"jquery",
	"cobweb/Fields",
	"cobweb/Basic/X3DFieldDefinition",
	"cobweb/Basic/FieldDefinitionArray",
	"cobweb/Components/Core/X3DSensorNode",
	"cobweb/Components/Grouping/X3DBoundedObject",
	"cobweb/Bits/X3DConstants",
],
function ($,
          Fields,
          X3DFieldDefinition,
          FieldDefinitionArray,
          X3DSensorNode, 
          X3DBoundedObject, 
          X3DConstants)
{
	with (Fields)
	{
		function ReceiverPdu (executionContext)
		{
			X3DSensorNode .call (this, executionContext .getBrowser (), executionContext);
			X3DBoundedObject .call (this, executionContext .getBrowser (), executionContext);

			this .addType (X3DConstants .ReceiverPdu);
		}

		ReceiverPdu .prototype = $.extend (Object .create (X3DSensorNode .prototype),new X3DBoundedObject (),
		{
			constructor: ReceiverPdu,
			fieldDefinitions: new FieldDefinitionArray ([
				new X3DFieldDefinition (X3DConstants .inputOutput,    "metadata",                 new SFNode ()),
				new X3DFieldDefinition (X3DConstants .initializeOnly, "bboxSize",                 new SFVec3f (-1, -1, -1)),
				new X3DFieldDefinition (X3DConstants .initializeOnly, "bboxCenter",               new SFVec3f (0, 0, 0)),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "enabled",                  new SFBool (true)),
				new X3DFieldDefinition (X3DConstants .outputOnly,     "isActive",                 new SFBool ()),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "address",                  new SFString ("localhost")),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "applicationID",            new SFInt32 (1)),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "entityID",                 new SFInt32 ()),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "multicastRelayHost",       new SFString ("")),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "multicastRelayPort",       new SFInt32 ()),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "networkMode",              new SFString ("standAlone")),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "port",                     new SFInt32 ()),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "radioID",                  new SFInt32 ()),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "readInterval",             new SFFloat (0.1)),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "receivedPower",            new SFFloat ()),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "receiverState",            new SFInt32 ()),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "rtpHeaderExpected",        new SFBool ()),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "siteID",                   new SFInt32 ()),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "transmitterApplicationID", new SFInt32 (1)),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "transmitterEntityID",      new SFInt32 ()),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "transmitterRadioID",       new SFInt32 ()),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "transmitterSiteID",        new SFInt32 ()),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "whichGeometry",            new SFInt32 (1)),
				new X3DFieldDefinition (X3DConstants .inputOutput,    "writeInterval",            new SFFloat (1)),
				new X3DFieldDefinition (X3DConstants .outputOnly,     "isNetworkReader",          new SFBool ()),
				new X3DFieldDefinition (X3DConstants .outputOnly,     "isNetworkWriter",          new SFBool ()),
				new X3DFieldDefinition (X3DConstants .outputOnly,     "isRtpHeaderHeard",         new SFBool ()),
				new X3DFieldDefinition (X3DConstants .outputOnly,     "isStandAlone",             new SFBool ()),
				new X3DFieldDefinition (X3DConstants .outputOnly,     "timestamp",                new SFTime ()),
			]),
			getTypeName: function ()
			{
				return "ReceiverPdu";
			},
			getComponentName: function ()
			{
				return "DIS";
			},
			getContainerField: function ()
			{
				return "children";
			},
		});

		return ReceiverPdu;
	}
});

