import { TouchableOpacityProps } from "react-native";
import { Container, Title, Icon } from "./style";

type Props = TouchableOpacityProps & {
    title: string
}

export function GroupCard({ title, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Icon />
            <Title>
                {title}
            </Title>
        </Container>
    )
}