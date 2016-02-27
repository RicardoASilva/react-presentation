// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Markdown,
  Quote, Slide, Spectacle, Text, S
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";
//import HelloWorld from "../assets/demos/1-HelloWorld/HelloWorld";
//<Fill>
//    <HelloWorld />
//</Fill>
import HelloWorldJsx from "../assets/demos/2-HelloJsx/HelloWorldJsx";
import Props from "../assets/demos/3-Props/Props";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const valign = {
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center'
};
const stretch = {
  maxWidth: '100%',
};

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  reactlogo: require("../assets/reactjs-logo.svg"),
  jquerylogo: require("../assets/jquery-logo.svg"),
  angularlogo: require("../assets/angular-logo.svg"),
  questions: require("../assets/questions.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#67DAF9",
  secondary: "#197D94",
  ternary: "#C1DBEC",
  react: "#67DAF9",
  react_light: "#00B4CC",
  react_lighter: "#00DFFC",
  react_dark: "#008C9E",
  react_darker: "#005F6B",
  dark: "#343838",
  light: "#E8E8E8"
});

const reactLogo = (height) => <Image src={ images.reactlogo } margin="0px auto 20px" height={height} />;

export default class Presentation extends React.Component {
  render() {

    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide", "fade"]} transitionDuration={200} progress="bar" controls={false}>

          <Slide transition={["fade"]} bgColor="react_darker" textColor="react" notes="">
            { reactLogo(300) }
            <Heading size={2} lineHeight={1} textColor="light" textFont="primary">
              Chatting with React
            </Heading>
            <Text textColor="light" textFont="primary" size={4} lineHeight={2}>
              React JS: A Javacript Library for Building User Intefaces
            </Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="react_darker" textColor="react" notes="">
            <Heading size={2} lineHeight={1} textColor="light" textFont="primary">
              History
            </Heading>

            <List>
              <ListItem>Created by Jordan Walke on January 2013</ListItem>
              <ListItem>Influenced by XHP, an HTML component of PHP</ListItem>
              <ListItem>Under active development by Facebook, Instagram and OSS</ListItem>
              <ListItem>Latest Release: 0.14.7</ListItem>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgColor="react_darker" textColor="react" notes="">
            <Heading size={2} lineHeight={1} textColor="light" textFont="primary">
              Features
            </Heading>

            <List>
              <ListItem>One-way data flow</ListItem>
              <ListItem>Virtual DOM</ListItem>
              <ListItem>JSX</ListItem>
              <ListItem>Server-side rendering</ListItem>
              <ListItem>Native Development fork (React Native)</ListItem>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgColor="react_darker" textColor="react" notes="">
            <Heading size={2} lineHeight={2} textColor="light" textAlign="center" textFont="primary">
              Why
               { reactLogo(100) } 
              ?
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="react_darker" textColor="react" notes="">
            <Heading size={2} lineHeight={2} textColor="light" textFont="primary">
              It makes the development process
              <Heading size={1} textFont="tertiary" caps textColor="react">
                easy!
              </Heading>
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="react_darker" textColor="react" notes="">
            <Heading size={2} lineHeight={2} textColor="light" textFont="primary">
              How ?
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="light" textColor="dark">
          <Layout>
                <Fill>
                    <Image src={images.jquerylogo} fit margin="0px auto 10px" width="100%" height="100px"/>
                    <Heading size={4} caps textColor="react" margin={20}>
                        Library
                    </Heading>
                    <Text margin="20px 0px 0px" bold lineHeight={1} fit>A tool to resolve just one specific thing</Text>
                </Fill>
                <Fill>
                    <Image src={images.angularlogo} margin="0px auto 10px" width="100%" height="100px" />
                    <Heading size={4} caps  textColor="react" margin={20}>
                    Framework
                    </Heading>
                </Fill>
            </Layout>
          </Slide>
          <Slide transition={["fade"]} bgColor="light" textColor="dark">
            <Layout>
                <Fill>
                    <Image src={images.jquerylogo} fit margin="0px auto 10px" width="100%" height="100px"/>
                    <Heading size={4} caps textColor="react" margin={20}>
                        Library
                    </Heading>
                    <Image src={images.reactlogo} fit margin="0px auto 10px" width="100%" height="150px"/>
                </Fill>
                <Fill>
                    <Image src={images.angularlogo} margin="0px auto 10px" width="100%" height="100px" />
                    <Heading size={4} caps  textColor="react" margin={20}>
                    Framework
                    </Heading>
                </Fill>
            </Layout>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" notes="Demo do HelloWorld">
          <Layout>
                <Fill>
                    <CodePane
                    lang="jsx"
                    source={require("raw!../assets/demos/1-HelloWorld/HelloWorld.example")}
                    margin="0px auto 10px"
                    />
                </Fill>
            </Layout>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" notes="Demo do HelloWorld com JSX">
          <Heading size={2} caps margin={20} textColor={"light"}>Hello Jsx</Heading>
          <Layout>
                <Fill>
                    <CodePane
                    lang="jsx"
                    source={require("raw!../assets/demos/2-HelloJsx/HelloWorldJsx.example")}
                    margin="0px auto 10px"
                    />
                </Fill>
                <Fill style={valign}>
                    <HelloWorldJsx />
                </Fill>
            </Layout>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" notes="<ul><li>Demo com props</li><li><a target={'_blank'} href={'http://mainhub.pt'}>MainHub</a><li>https://goo.gl/zo1OdS</li></li>">
           <Heading size={2} caps margin={20} textColor={"light"}>Props</Heading>
            <Layout>
              <Fill style={stretch}>
                <CodePane
                    lang="jsx"
                    source={require("raw!../assets/demos/3-Props/Props.example")}
                    margin={"0px auto 10px"}
                    />
              </Fill>
              <Fill style={valign}>
                <Props margin={"0px auto 10px"} />
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" notes="">
          <Layout>
            <Fill>
                <Heading size={4}>Questions?</Heading>
                <Image src={images.questions} fit margin="0px auto 10px" width="100%" height="auto" />
            </Fill>
          </Layout>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary"
            notes="<ul><li>Amazing growth rate.</li><li>At this rate bigger than others combined.</li></ul>">
            <Heading size={1} textColor="tertiary">
              Module Counts
            </Heading>
            <Layout>
              <Image padding="20px" />
            </Layout>
            <Layout>
              <Text>
                <Link href="http://www.modulecounts.com/">modulecounts.com</Link>
              </Text>
            </Layout>
          </Slide>
          <Slide transition={["fade"]} bgColor="black">
            <BlockQuote>
              <Quote>Average salary of a React developer in SF - $153k</Quote>
              <Cite><Link href="http://www.indeed.com/salary?q1=React+Js+Front+End+Engineer&l1=San+Francisco%2C+CA">Indeed</Link></Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <iframe
              width="135%"
              height="750px"
              style={{transform: 'scale(0.75, 0.75)', transformOrigin: 'top left'}}
              src="https://antwarjs.github.io"/>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <iframe
              width="135%"
              height="750px"
              style={{transform: 'scale(0.75, 0.75)', transformOrigin: 'top left'}}
              src="https://leanpub.com/survivejs_webpack_react"/>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              GitHub in brief
            </Heading>
            <Markdown>
          {`
* Good collaboration platform
* Primarily for code but works for books
* Provides versioning (Git), issue tracker, basic analytics
* Book site is hosted on top of [GitHub Pages](https://pages.github.com/)
          `}
            </Markdown>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle
            </Heading>
            <Heading size={1} fit caps>
              A ReactJS Presentation Library
            </Heading>
            <Heading size={1} fit caps textColor="black">
              Where You Can Write Your Decks In JSX
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo]()

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
