import React from "react";
import Container from "../../components/Container";
import InputField from "../../components/common/InputField";
import Button from "../../components/common/Button";

export default function Area() {
    return <Container>
        <section className="flex flex-col sm:flex-row pt-10 " >
            <div className="m-auto w-1/2" > <h2> Find us in these <b>Area</b> </h2>
                <InputField placeholderText="Enter your area..." />
                <Button buttonText="Search" />
            </div>
            <div className="w-1/2 m-auto  " > hello hello <br></br>
                hello hello <br></br>
                hello hello <br></br>
                hello hello <br></br>
                hello hello <br></br>hello hello <br></br>hello hello <br></br>hello hello <br></br>
            </div>
        </section>
    </Container>
}