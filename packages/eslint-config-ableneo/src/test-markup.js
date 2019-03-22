// @flow
// eslint-disable-next-line
import React from 'react'

/* eslint-disable no-unused-vars */

const ComponentZeroProp = () => < input />
const ComponentZeroProp1 = () => < div ></ div >
const ComponentOneProp = (one) => <input one={one}/>
const ComponentTwoProp = (one, two) => <input one={one} two={two}/>
const ComponentTreeProp = (one, two, tree) => <input one={one} two={two} tree={tree}/>
const ComponentFourProp = (one, two, tree, four) => <input one={one} two={two} tree={tree} four={four}/>
const ComponentFiveProp = (one, two, tree, four, five) => <input one={one} two={two} tree={tree} four={four} five={five}/>
const ComponentSixProp = (one, two, tree, four, five, six) => <input one={one} two={two} tree={tree} four={four} five={five} six={six}/>
const ComponentSevenProp = (one, two, tree, four, five, six, seven) => <input one={one} two={two} tree={tree} four={four} five={five} six={six} seven={seven}/>


const ComponentText0 = () => <input text='some text' />
const ComponentText1 = () => <input text={'some text'} />
const ComponentText2 = () => <input text="some text" />
const ComponentText3 = () => <input text={"some text"} />
const ComponentText4 = () => <input text={"'some' text"} />
const ComponentText5 = () => <input text={"'some' text"} />
const ComponentText6 = () => <input text='"some" text' />
const ComponentText7 = (text) => <input text={"'some' " + text + " text"} />
const ComponentText8 = (text) => <input text={`${text}`} />

const array = []
const array1 = ['']
const array2 = ['one', 'two']
const array3 = ['one', 'two', "tree"]
const array4 = [
    'one',
'two',
  "tree"]

const object = {}
const object1 = { "1": 'test'}
const object2 = { '1': 'test' }
const object3 = {'1': 'test'}
const object4 = {"1": 'test', '2' : "test"}
const object5 = {
  '1': 'test',
  "2": "test"
}
const x = a =>
  a ?
    1
    :
    2;

function testNewLineBeforeReturn(z) {
  const y = z;
  return y;
}

type X = { x: string, }

type Y = {
  y: string

}

type XY = X & Y;
type XYZ = XY & {z:string};

const handleSizeValue = 1;
const percentage = 1;

const offset = handleSizeValue / 2 * (1 - percentage / 0.5);

export const mod = (dividend: number, divisor: number): number =>
  (dividend % divisor + divisor) % divisor;
/* eslint-enable no-unused-vars */
