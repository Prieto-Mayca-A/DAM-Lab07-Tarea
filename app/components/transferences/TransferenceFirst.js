var moment = require('moment');
moment.locale('es');

import React, {Component} from 'react';
import {Text, View, Button, TextInput, TouchableOpacity, Switch, Alert} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const data = [
    { key: 1, section: true, label: 'Cuentas Prueba' },
    { key: 2, label: '194-1967786-1-34' },
    { key: 3, label: '193-1853946-0-25' },
    { key: 4, label: '0011-0426-0100005979' },
    { key: 5, label: '0011-0426-0100005960' },
    { key: 6, label: '00-046-021886' },
    { key: 7, label: '002-194-001967786134-96' },
    { key: 8, label: ' 002-193-001853946025-15' },
    { key: 9, label: '011-426-000100005979-48' },
    { key: 10, label: '011-426-000100005960-48' },
    { key: 11, label: '195-4567786-1-79' },
];

export default class TransferenceFirst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDatePickerVisible: false,
            isEnabled: false,
            origen: '',
            destino: '',
            importe: 0,
            referencia: '',
            fecha: '',
            message: '',
        };
    }

    render() {
        const showDatePicker = () => this.setState({isDatePickerVisible: true});
        const hideDatePicker = () => this.setState({isDatePickerVisible: false});
        const handleConfirm = (date) => {this.setState({fecha: moment(date).format("YYYY/MM/DD")}); hideDatePicker()};
        const toggleSwitch = () => this.setState({isEnabled: !this.state.isEnabled});

        const validate = () => {
            const data = {
                object:this.state,
                navigator:this.props.navigation}
            if(this.state.Cuentaorigen=='' || this.state.Cuentadestino=='' || this.state.referencia=='' || this.state.fecha==''){
                alert('Le falta campos x completar!!');
                return;
            }
            if(parseInt(this.state.importe)>=0){
                this.props.navigation.navigate('Second',data);
                return;
            }
            alert('El importe no es correcto!!');
        };

        return (
            <View style={styles.container}>
                <Text>Cuenta origen</Text>
                <ModalSelector
                    data={data}
                    initValue="Ingrese una cuenta"
                    style={styles.input} 
                    onChange={(option)=>this.setState({Cuentaorigen:option.label})}/>
                <Text>Cuenta destino</Text>
                <ModalSelector
                    data={data}
                    initValue="Ingrese una cuenta" 
                    style={styles.input}
                    onChange={(option)=>this.setState({Cuentadestino:option.label})}/>
                <Text>Importe</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Ingrese su importe en soles >:) no le robaremos' 
                        onChangeText={(text)=>this.setState({importe:text})}/>
                <Text>Referencia</Text>
                    <TextInput style={styles.input} onChangeText={(text)=>this.setState({referencia:text})}/>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={showDatePicker}>
                        <Text style={styles.date}>{this.state.fecha}</Text>
                    </TouchableOpacity>
                </View>
                <DateTimePickerModal
                    isVisible={this.state.isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <View style={styles.switch}>
                    <Text>Notificarme al email?</Text>    
                    <Switch
                        trackColor={{ false: "#B7C0B6", true: "#B7C0B6" }}
                        thumbColor={this.state.isEnabled ? "#17FF00" : "#FF0000"}
                        onValueChange={toggleSwitch}
                        value={this.state.isEnabled}
                    />
                </View>
                <View style={{ alignItems: 'center'}}>
                    <View style={{width:200}}>
                        <Button color='purple' title="Siguiente" onPress={validate} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        margin: 30,
    },
    input: {
        backgroundColor: '#ADA5A5',
        height: 40,
    },
    switch: {
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom:10
    },
    date: {
        marginTop: 30,
        marginBottom: 10,
        width: 110,
        height: 30,
        fontSize: 20,
        backgroundColor: '#ADA5A5',
    }
}