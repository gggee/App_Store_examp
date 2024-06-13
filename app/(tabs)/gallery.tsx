import React from "react";
import { View, ScrollView, Text, ImageBackground, StyleSheet, Button } from "react-native";

const images = [
  { id: 'img_0', name: 'Image 1', src: 'https://i.playground.ru//i/screenshot/217520/the_last_of_us_part_2.jpg'},
  { id: 'img_1', name: 'Image 2', src: 'https://www.rollingstone.com/wp-content/uploads/2024/01/001.png?w=1581&h=1054&crop=1'},
  { id: 'img_2', name: 'Image 3', src: 'https://simg.marwin.kz/media/catalog/product/cache/8d1771fdd19ec2393e47701ba45e606d/1/0/10a51d13444bbb79eaa604ee066723d0.jpg'},
  { id: 'img_3', name: 'Image 4', src: 'https://static.tildacdn.com/tild3066-3938-4830-b665-396637393531/38.jpg' },
  { id: 'img_4', name: 'Image 5', src: 'https://games.mail.ru/hotbox/content_files//gallery/2020/06/10/a58846d61bc04cd7a98fa11ab4d33586.jpg' },
  { id: 'img_5', name: 'Image 6', src: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/2381555/1f14f88e1a5f04959499794bc219cfbe/960x540' },
];
const image_url = { uri: 'https://images.alphacoders.com/109/1090800.jpg' };
const logo = { uri: 'data:image/jpeg;base64,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'}

export default function TabGalleryScreen() {
  return (
    <ScrollView>
      <ImageBackground source={image_url} resizeMode='stretch' style={styles.bg}></ImageBackground>
      <View style={styles.block}>
        <ImageBackground source={logo} resizeMode='stretch' style={styles.logo}></ImageBackground>
        <View style={styles.block_content}>
          <Text style={styles.logo_txt}>The Last of Us 2</Text>
          <Text style={styles.txt}>96% of users liked this video game</Text>
          <Button title="Get" />
        </View>
      </View>
      <ScrollView style={styles.block} horizontal={true}>
        <View style={styles.info}>
          <Text style={styles.info_txt}>130k rating</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.info_txt}>Age</Text>
          <Text style={styles.info_txt}>18+</Text>
          <Text style={styles.info_txt}>Years old</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.info_txt}>Chart 1</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.info_txt}>Developer</Text>
          <Text style={styles.info_txt}>Naughty Dog</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.info_txt}>Best game</Text>
        </View>
      </ScrollView>

      <View style={styles.block_desp}>
        <View>
          <Text style={styles.logo_txt}>Descriptions</Text>
        </View>
        <View>
          <Text style={styles.desc_txt}>
            The Last of Us Part II is an action-adventure game with elements of survival horror and third-person stealth action. The player can use firearms and homemade weapons against hostile representatives of other factions and those infected with cordyceps fungus. The player can also pick up various items to improve the character's skill tree, divided into three categories: "Survival", "Crafting" and "Stealth". In the second part, dogs also appeared that are able to track the player character by smell
          </Text>
        </View>
      </View>

      <View>
        <View>
          <Text style={styles.logo_txt}>Preview</Text>
        </View>
        <ScrollView style={styles.block} horizontal={true}>
          {images.map(image => (
            <ImageBackground key={image.id} source={{ uri: image.src }} resizeMode='stretch' style={styles.img_block}></ImageBackground>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    bg: {
      width: '100%',
      height: 200
    },
    logo: {
      width: 130,
      height: 130,
      margin: 20,
      borderRadius: 35,
      overflow: "hidden",
      borderWidth: 2
    },
    block: {
      display: 'flex',
      flexDirection: 'row'
    },
    logo_txt: {
      margin: 30,
      fontSize: 20,
      fontWeight: 'bold'
    },
    block_content: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'flex-end'
    },
    txt: {
      fontSize: 16,
      width: '60%',
      marginLeft: 30
    },
    info: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'flex-end',
      padding: 20,
      alignItems: 'center'
    },
    info_txt: {
      fontSize: 15,
      color: 'gray'
    },
    desc_txt: {
      fontSize: 14,
      width: '90%',
      marginLeft: 30
    },
    block_desp: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center'
    },
    img_block: {
      width: 270,
      height: 220,
      margin: 20,
      borderRadius: 20,
      overflow: "hidden",
      borderWidth: 2
    }
  });