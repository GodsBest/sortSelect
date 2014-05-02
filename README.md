sortSelect
==========

Alphabetically sort a dropdown list (select element) in descending or ascending order. You can sort by the option element values or the display text.

## Installation

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

    <script src="/path/to/jquery.sortSelect.js"></script>

**Do not include the script directly from GitHub (http://raw.github.com/...).** The file is being served as text/plain and as such being blocked
in Internet Explorer on Windows 7 for instance (because of the wrong MIME type). Bottom line: GitHub is not a CDN.

## Usage

Sort in ascending order

	$( '.selector' ).sortSelect( { order: 'asc' } );
	
Use option values as sort by data

	$( '.selector' ).sortSelect( { use: 'val' } );
	
Use default configuration

	$( '.selector' ).sortSelect();

Configuration
=============

order: asc, desc; default: asc

use: val, text; default: val
