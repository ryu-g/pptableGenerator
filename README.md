# pptableGenerator

this is API to generate panel-de-pon panel table randomly.

## sample

ex) on shell
```
curl https://cryptic-eyrie-04921.herokuapp.com/panepon-table/
```

response sample
```
{
  "result":true,
  "table":[
    [2,4,3,2,3,0],
    [0,3,1,3,1,4],
    [3,4,0,1,0,1],
    [4,2,1,3,4,2],
    [3,4,3,2,1,4],
    [1,0,2,3,0,2],
    [2,3,1,2,1,3],
    [0,2,0,4,2,0],
    [3,1,2,3,0,3],
    [1,2,0,0,4,4],
    [0,1,2,4,2,0],
    [1,0,1,3,3,4]
  ]
}⏎
```

those 0,1,2,3,4 means the kind of blocks.
if you want 6 or more kind blocks, check below.

## increase the kind of panels

```
ppTableGenerator.js

3 | const KIND_OF_PANEL = 5 //パネルの色数
```

change `KIND_OF_PANEL` to 6, 7, or more.

glhf!
