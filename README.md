# react-native-image-avatars

A simple and fully customizable React Native component that displays avatars for images & text. 

* Rounded & Square shaped avatars
* Avatars with border colors
* Avatars for textual data (slices initial character of the word automatically)

## Installation

If using yarn:

```
yarn add react-native-image-avatars
```

If using npm:

```
npm i react-native-image-avatars
```

## Usage

```
import { Avatar } from 'react-native-image-avatars';
```

Image Avatar:

```
<Avatar
  imageUrl = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  size="small"
  borderColor = "#f2f2f2"
  shadow
/>
``` 

Text Avatar:

```
<Avatar
  type = 'text'
  text='Davis Benton'
  size="x-small"
  borderColor = "#f2f2f2"
  textBackgroundFill = '#000'
  textColor = '#fff'
  shadow
/>
``` 
## Documentation

### Component Props Reference


| Name                      | Description                              | Default     | Type   |
|---------------------------|------------------------------------------|-------------|--------|
| type                      | 'image' or 'text'  | 'image'           | String |
| imageUrl               | URL of the image      | null       | String |
| shadow | Adds shadow ( elevation {15} for android & equivalent for IOS ) | true     | Boolean |


## Contributing
Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.

**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Author
Saurabh Kataria | Freelance Developer

Looking for a full-time or part-time remote-based developer. 
Checkout my UpWork Profile:
[https://www.upwork.com/fl/saurabhkataria6](https://www.upwork.com/fl/saurabhkataria6)

## License
[MIT](./LICENSE)