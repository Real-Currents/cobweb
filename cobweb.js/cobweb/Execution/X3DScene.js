
define ([
	"jquery",
	"cobweb/Fields",
	"cobweb/Execution/X3DExecutionContext",
	"cobweb/Configuration/UnitInfo",
	"cobweb/Configuration/UnitInfoArray",
	"cobweb/Bits/X3DConstants",
],
function ($,
          Fields,
          X3DExecutionContext,
          UnitInfo,
          UnitInfoArray,
          X3DConstants)
{
"use strict";

	function X3DScene (executionContext)
	{
		X3DExecutionContext .call (this, executionContext);

		this .getRootNodes () .setAccessType (X3DConstants .inputOutput);

		this .units = new UnitInfoArray ();

		this .units .add ("angle",  new UnitInfo ("angle",  "radian",   1));
		this .units .add ("force",  new UnitInfo ("force",  "newton",   1));
		this .units .add ("length", new UnitInfo ("length", "metre",    1));
		this .units .add ("mass",   new UnitInfo ("mass",   "kilogram", 1));

		this .metaData = { };
	}

	X3DScene .prototype = $.extend (Object .create (X3DExecutionContext .prototype),
	{
		constructor: X3DScene,
		isRootContext: function ()
		{
			return true;
		},
		updateUnit: function (category, name, conversionFactor)
		{
			var unit = this .units .get (category);

			if (! unit)
				return;

			unit .name             = name;
			unit .conversionFactor = conversionFactor;
		},
		setMetaData: function (name, value)
		{
			if (! name .length)
				return;

			this .metaData [name] = String (value);
		},
		getMetaData: function (name)
		{
			return this .metaData [name];
		},
		setRootNodes: function (value)
		{
			this .getRootNodes () .setValue (value);
		},
	});

	return X3DScene;
});
