[team-sorter](../README.md) › [Lista](lista.md)

# Class: Lista

A list of people that can be sorted into teams

## Hierarchy

* **Lista**

## Index

### Constructors

* [constructor](lista.md#constructor)

### Properties

* [_arr](lista.md#private-_arr)

### Accessors

* [array](lista.md#array)

### Methods

* [getRandom](lista.md#getrandom)
* [fromString](lista.md#static-fromstring)

## Constructors

###  constructor

\+ **new Lista**(`arr`: string[]): *[Lista](lista.md)*

*Defined in [library.ts:5](https://github.com/ernestoittig/teams/blob/761eaff/src/library.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`arr` | string[] |

**Returns:** *[Lista](lista.md)*

## Properties

### `Private` _arr

• **_arr**: *string[]*

*Defined in [library.ts:5](https://github.com/ernestoittig/teams/blob/761eaff/src/library.ts#L5)*

## Accessors

###  array

• **get array**(): *string[]*

*Defined in [library.ts:34](https://github.com/ernestoittig/teams/blob/761eaff/src/library.ts#L34)*

Create an array with all the people in this instance

**Returns:** *string[]*

## Methods

###  getRandom

▸ **getRandom**(`del`: boolean): *string*

*Defined in [library.ts:25](https://github.com/ernestoittig/teams/blob/761eaff/src/library.ts#L25)*

Get a random element from the array

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`del` | boolean | false | Whether to delete the retrieved item  |

**Returns:** *string*

___

### `Static` fromString

▸ **fromString**(`str`: string): *[Lista](lista.md)‹›*

*Defined in [library.ts:16](https://github.com/ernestoittig/teams/blob/761eaff/src/library.ts#L16)*

Makes a new instance from a string separated by new lines.

Whitespace and empty lines are ignored

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | string |   |

**Returns:** *[Lista](lista.md)‹›*
