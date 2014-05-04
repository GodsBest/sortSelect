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

Option | Default Value | Possible Values |
:------|:--------------|:----------------|
order  | 'asc'         | 'asc': sorts in ascending order, |
       |               | 'desc': sorts in descending order  |
use    | 'val'         | 'val': uses option value as sort by field |
       |               | 'text': uses inner text of option as sort by field |
ignorecase | true      | true: sort is case-insensitive |
           |           | false: sort is case-sensitive |
		   
## Limitations

Any event handlers attached to the option elements will be lost.

## Future

1. Add numeric sort
2. Retain event handlers attached to option elements