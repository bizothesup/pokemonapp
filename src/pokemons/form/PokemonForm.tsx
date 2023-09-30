import Pokemon from "../../models/pokemon";
import formatType from "../../helpers/format-type";
import React, {FunctionComponent, useState} from "react";

type Props= {
    pokemon: Pokemon
}
type Field={
    value?: any,
    error?:string,
    isValid?:boolean
}
type Form={
    name:Field,
    hp:Field,
    cp:Field,
    types:Field
}
export const PokemonForm:FunctionComponent<Props> = ({pokemon}) => {
    const [form, setForm] = useState<Form>({
    name:{value:pokemon.name,isValid:true},
        cp: {value:pokemon.cp,isValid:true},
        hp:{value:pokemon.hp,isValid:true},
        types: {value:pokemon.types,isValid:true}
    });
    const types: string[] = [
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
        'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];
    const hastypes = (type: string):boolean => {
      return form.types.value.includes(type);
    }
    
    const handlerInputCange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const fieldName:string = e.target.name;
      const fieldValue:string = e.target.value;
      const newField:Field = {[fieldName]: {value: fieldValue}};
      setForm({...form, ...newField});
    }
    const selectType = (type: string, e: React.ChangeEvent<HTMLInputElement>): void => {
        const checked = e.target.checked;
        let newField: Field;

        if(checked) {
            // Si l'utilisateur coche un type, à l'ajoute à la liste des types du pokémon.
            const newTypes: string[] = form.types.value.concat([type]);
            newField = { value: newTypes };
        } else {
            // Si l'utilisateur décoche un type, on le retire de la liste des types du pokémon.
            const newTypes: string[] = form.types.value.filter((currentType: string) => currentType !== type);
            newField = { value: newTypes };
        }

        setForm({...form, ...{ types: newField }});
    }
    return (
        <form>
            <div className="row">
                <div className="col s12 m8 offset-m2">
                    <div className="card hoverable">
                        <div className="card-image">
                            <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                {/* Pokemon name */}
                                <div className="form-group">
                                    <label htmlFor="name">Nom</label>
                                    <input id="name" type="text" name="name" className="form-control" value={form.name.value} onChange={event => handlerInputCange(event)}></input>
                                </div>
                                {/* Pokemon hp */}
                                <div className="form-group">
                                    <label htmlFor="hp">Point de vie</label>
                                    <input id="hp" type="number" name="hp" className="form-control" value={form.hp.value} onChange={event => handlerInputCange(event)}></input>
                                </div>
                                {/* Pokemon cp */}
                                <div className="form-group">
                                    <label htmlFor="cp">Dégâts</label>
                                    <input id="cp" type="number" name="cp" className="form-control" value={form.cp.value} onChange={event => handlerInputCange(event)}></input>
                                </div>
                                {/* Pokemon types */}
                                <div className="form-group">
                                    <label>Types</label>
                                    {types.map(type => (
                                        <div key={type} style={{marginBottom: '10px'}}>
                                            <label>
                                                <input id={type} type="checkbox" name="types" className="filled-in" value={type} checked={hastypes(type)} onChange={event => selectType(type,event)}></input>
                                                <span>
                          <p className={formatType(type)}>{ type }</p>
                        </span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="card-action center">
                                {/* Submit button */}
                                <button type="submit" className="btn">Valider</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );

};