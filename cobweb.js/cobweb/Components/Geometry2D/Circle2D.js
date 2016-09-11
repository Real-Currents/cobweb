/* -*- Mode: JavaScript; coding: utf-8; tab-width: 3; indent-tabs-mode: tab; c-basic-offset: 3 -*-
 *******************************************************************************
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright create3000, Scheffelstraße 31a, Leipzig, Germany 2011.
 *
 * All rights reserved. Holger Seelig <holger.seelig@yahoo.de>.
 *
 * The copyright notice above does not evidence any actual of intended
 * publication of such source code, and is an unpublished work by create3000.
 * This material contains CONFIDENTIAL INFORMATION that is the property of
 * create3000.
 *
 * No permission is granted to copy, distribute, or create derivative works from
 * the contents of this software, in whole or in part, without the prior written
 * permission of create3000.
 *
 * NON-MILITARY USE ONLY
 *
 * All create3000 software are effectively free software with a non-military use
 * restriction. It is free. Well commented source is provided. You may reuse the
 * source in any way you please with the exception anything that uses it must be
 * marked to indicate is contains 'non-military use only' components.
 *
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * Copyright 2015, 2016 Holger Seelig <holger.seelig@yahoo.de>.
 *
 * This file is part of the Cobweb Project.
 *
 * Cobweb is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License version 3 only, as published by the
 * Free Software Foundation.
 *
 * Cobweb is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License version 3 for more
 * details (a copy is included in the LICENSE file that accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version 3
 * along with Cobweb.  If not, see <http://www.gnu.org/licenses/gpl.html> for a
 * copy of the GPLv3 License.
 *
 * For Silvio, Joy and Adi.
 *
 ******************************************************************************/


define ("cobweb/Components/Geometry2D/Circle2D",
[
	"jquery",
	"cobweb/Fields",
	"cobweb/Basic/X3DFieldDefinition",
	"cobweb/Basic/FieldDefinitionArray",
	"cobweb/Components/Rendering/X3DLineGeometryNode",
	"cobweb/Bits/X3DConstants",
	"standard/Math/Numbers/Vector3",
],
function ($,
          Fields,
          X3DFieldDefinition,
          FieldDefinitionArray,
          X3DLineGeometryNode, 
          X3DConstants,
          Vector3)
{
"use strict";

	function Circle2D (executionContext)
	{
		X3DLineGeometryNode .call (this, executionContext);

		this .addType (X3DConstants .Circle2D);

		this .setGeometryType (1);
	}

	Circle2D .prototype = $.extend (Object .create (X3DLineGeometryNode .prototype),
	{
		constructor: Circle2D,
		fieldDefinitions: new FieldDefinitionArray ([
			new X3DFieldDefinition (X3DConstants .inputOutput,    "metadata", new Fields .SFNode ()),
			new X3DFieldDefinition (X3DConstants .initializeOnly, "radius",   new Fields .SFFloat (1)),
		]),
		getTypeName: function ()
		{
			return "Circle2D";
		},
		getComponentName: function ()
		{
			return "Geometry2D";
		},
		getContainerField: function ()
		{
			return "geometry";
		},
		initialize: function ()
		{
			X3DLineGeometryNode .prototype .initialize .call (this);

			this .setPrimitiveMode (this .getBrowser () .getContext () .LINE_LOOP);
		},
		set_live__: function ()
		{
			X3DLineGeometryNode .prototype .set_live__ .call (this);

			if (this .getExecutionContext () .isLive () .getValue () && this .isLive () .getValue ())
				this .getBrowser () .getCircle2DOptions () .addInterest (this, "eventsProcessed");
			else
				this .getBrowser () .getCircle2DOptions () .removeInterest (this, "eventsProcessed");
		},
		build: function ()
		{
			var
				options         = this .getBrowser () .getCircle2DOptions (),
				radius          = this .radius_ .getValue (),
				defaultVertices = options .getVertices (),
				vertices        = this .getVertices ();

			if (radius === 1)
				this .setVertices (defaultVertices);
			else
			{
				for (var i = 0, length = defaultVertices .length; i < length; i += 4)
					vertices .push (defaultVertices [i] * radius, defaultVertices [i + 1] * radius, 0, 1);
			}

			this .getMin () .set (-radius, -radius, 0);
			this .getMax () .set ( radius,  radius, 0);
		},
	});

	return Circle2D;
});


