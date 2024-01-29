/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    Text,
    Keyboard,
    TouchableWithoutFeedback,
    Pressable,
    ScrollView
} from 'react-native';
import styles from './IrregularVerbs_styles';
import verbs from './Irregular_data';
import {IconOutline} from '@ant-design/icons-react-native';
import {TextInput} from 'react-native-gesture-handler';

interface IrregularVerbsState {
    text1: string;
    text2: string;
    text3: string;
    rigthAnswer1: string;
    rigthAnswer2: string;
    rigthAnswer3: string;
    verbs: typeof verbs;
    current_verb_index?: number | null;
    isRight1: boolean;
    isRight2: boolean;
    isRight3: boolean;
    next: boolean,
}

class IrregularVerbs extends React.Component<{}, IrregularVerbsState> {
    state = {
        text1: '',
        text2: '',
        text3: '',
        rigthAnswer1: '',
        rigthAnswer2: '',
        rigthAnswer3: '',
        verbs: verbs,
        current_verb_index: null,
        isRight1: false,
        isRight2: false,
        isRight3: false,
        next: false,
    };

    handleChange1 = (text1: string) => {
        this.setState({
            text1: text1,
        });
    };

    handleChange2 = (text2: string) => {
        this.setState({
            text2: text2,
        });
    };

    handleChange3 = (text3: string) => {
        this.setState({
            text3: text3,
        });
    };

    start = () => {
        const randomIndex = Math.floor(Math.random() * this.state.verbs.length);

        this.setState({
            current_verb_index: randomIndex,
        });
    };

    getCurrentVerb = () => {
        return this.state.verbs[this.state.current_verb_index!];
    };

    next = () => {
        this.start();
        this.setState({
            text1: '',
            text2: '',
            text3: '',
            rigthAnswer1: '',
            rigthAnswer2: '',
            rigthAnswer3: '',
            isRight1: false,
            isRight2: false,
            isRight3: false,
            next: false,
        });
    };
    showRightAnswer = () => {
        this.setState({
            rigthAnswer1: this.state.verbs[this.state.current_verb_index!].Base,
            rigthAnswer2:
            this.state.verbs[this.state.current_verb_index!]['Past-simple'],
            rigthAnswer3:
            this.state.verbs[this.state.current_verb_index!]['Past-Participle'],
        });
    };

    checkAnswer = () => {
        this.setState({
            next: true
        })
        if (
            this.state.verbs[this.state.current_verb_index!].Base === this.state.text1
        ) {
            this.setState({
                isRight1: true,
            });
        }
        if (
            this.state.verbs[this.state.current_verb_index!]['Past-simple'] ===
            this.state.text2
        ) {
            this.setState({
                isRight2: true,
            });
        }
        if (
            this.state.verbs[this.state.current_verb_index!]['Past-Participle'] ===
            this.state.text3
        ) {
            this.setState({
                isRight3: true,
            });
        }
        
    };

  render() {
    return (
         
        <TouchableWithoutFeedback accessible={false}  onPress={Keyboard.dismiss}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.instruction}>
                        *Please write down the given verb's first, second and third
                        form in the right boxes!
                    </Text>

                    <View style={styles.content}>

                        <View style={styles.currentVerbContainer}>
                            <Text style={{color: '#edabc2', fontSize: 25}}>Verb:</Text>
                            {this.state.current_verb_index !== null && (
                                <>
                                    <View style={styles.currentVerb}>
                                        <Text style={{color:"#30b0ae",fontSize:30}}>{this.getCurrentVerb().Hungarian}</Text>
                                    </View>
                                    <Pressable onPress={this.showRightAnswer}>
                                        <Text style={styles.showButton}>Show Answers</Text>
                                    </Pressable>
                                </>
                            )}
                        </View>
                        
                        <View style={styles.inputs_container}>

                            <View style={styles.input_properties}>
                                <Text style={styles.labels}>Simple</Text>
                                <TextInput
                                    style={styles.first_input}
                                    placeholder="type here..."
                                    placeholderTextColor="#f2ebee"
                                    onChangeText={this.handleChange1}
                                    defaultValue={this.state.text1}
                                    autoCapitalize='none'
                                />
                                <Text style={styles.rightAnswer}>
                                    {this.state.rigthAnswer1}
                                </Text>
                                <View style={styles.icon_container}>
                                    {this.state.current_verb_index != null && this.state.next ? (
                                        <IconOutline
                                            style={{
                                            color: this.state.isRight1 ? '#34944d' : '#912424',
                                            }}
                                            name="check-square"
                                            size={24}
                                        />
                                    ) : (
                                        <IconOutline
                                            style={{color: 'grey'}}
                                            name="check-square"
                                            size={24}
                                        />
                                    )}
                                </View>
                            </View>

                            <View style={styles.input_properties}>
                                <Text style={styles.labels}>Past simple</Text>
                                <TextInput
                                    placeholder="type here..."
                                    placeholderTextColor="#f2ebee"
                                    style={styles.second_input}
                                    onChangeText={this.handleChange2}
                                    defaultValue={this.state.text2}
                                    autoCapitalize='none'
                                />
                                <Text style={styles.rightAnswer}>
                                    {this.state.rigthAnswer2}
                                </Text>
                                <View style={styles.icon_container}>
                                    {this.state.current_verb_index != null && this.state.next ? (
                                    <IconOutline
                                        style={{
                                        color: this.state.isRight2 ? '#34944d' : '#912424',
                                        }}
                                        name="check-square"
                                        size={24}
                                    />
                                    ) : (
                                    <IconOutline
                                        style={{color: 'gray'}}
                                        name="check-square"
                                        size={24}
                                    />
                                    )}
                                </View>
                            </View>

                            <View style={styles.input_properties}>
                                <Text style={styles.labels}>Past participle</Text>
                                <TextInput
                                    placeholder="type here..."
                                    placeholderTextColor="#f2ebee"
                                    style={styles.third_input}
                                    onChangeText={this.handleChange3}
                                    defaultValue={this.state.text3}
                                    autoCapitalize='none'
                                />
                                <Text style={styles.rightAnswer}>
                                    {this.state.rigthAnswer3}
                                </Text>
                                <View style={styles.icon_container}>
                                    {this.state.current_verb_index != null && this.state.next ? (
                                        <IconOutline
                                            style={{
                                            color: this.state.isRight3 ? 'green' : '#912424',
                                            }}
                                            name="check-square"
                                            size={24}
                                        />
                                        ) : (
                                        <IconOutline
                                            style={{color: 'gray'}}
                                            name="check-square"
                                            size={24}
                                        />
                                    )}
                                </View>
                            </View>

                            <View style={styles.bottomButtons}>
                                {this.state.current_verb_index === null ? (
                                    <Pressable style={styles.StartButton} onPress={this.start}>
                                    <Text>Start</Text>
                                    </Pressable>
                                ) : (
                                    <Pressable style={styles.NextButton} onPress={this.next}>
                                        <Text>Next</Text>
                                        <IconOutline
                                            style={{color: 'white'}}
                                            name="arrow-right"
                                            size={24}
                                        />
                                    </Pressable>
                                )}
                                {this.state.current_verb_index != null && (
                                    <Pressable
                                    style={styles.checkAnswer}
                                    onPress={this.checkAnswer}>
                                        <Text>Check answers</Text>
                                    </Pressable>
                                )}
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
  }
}

export default IrregularVerbs;
