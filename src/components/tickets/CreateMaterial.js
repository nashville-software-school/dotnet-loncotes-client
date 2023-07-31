import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { getGenres } from "../../data/genresData";
import { getMaterialTypes } from "../../data/materialTypesData";
import { useNavigate } from "react-router-dom/dist";
import { createMaterial } from "../../data/materialsData";

export default function CreateMaterial() {
  const navigate = useNavigate();

  const [materialName, setMaterialName] = useState("");
  const [genreId, setGenreId] = useState(0);
  const [materialTypeId, setMaterialTypeId] = useState(0);
  const [genres, setGenres] = useState([]);
  const [materialTypes, setMaterialTypes] = useState([]);

  useEffect(() => {
    getGenres().then(setGenres);
    getMaterialTypes().then(setMaterialTypes);
  }, []);

  const submit = () => {
    const newMaterial = {
      materialName,
      genreId,
      materialTypeId,
    };

    createMaterial(newMaterial).then(() => {
      navigate("/materials");
    });
  };

  return (
    <div className="container">
      <h4>Add a New Material</h4>
      <Form>
        <FormGroup>
          <Label htmlFor="materialName">Title</Label>
          <Input
            type="text"
            placeholder="Title"
            name="materialName"
            value={materialName}
            onChange={(e) => {
              setMaterialName(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="genre">Genre</Label>
          <Input
            name="genre"
            type="select"
            value={genreId}
            onChange={(e) => {
              setGenreId(parseInt(e.target.value));
            }}
          >
            <option value="0">Choose a Genre</option>
            {genres.map((g) => (
              <option value={g.id}>{g.name}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="materialType">Material Type</Label>
          <Input
            name="materialType"
            type="select"
            value={materialTypeId}
            onChange={(e) => {
              setMaterialTypeId(parseInt(e.target.value));
            }}
          >
            <option value="0">Choose a Material Type</option>
            {materialTypes.map((mt) => (
              <option value={mt.id}>{mt.name}</option>
            ))}
          </Input>
        </FormGroup>
        <Button onClick={submit}>Submit</Button>
      </Form>
    </div>
  );
}
