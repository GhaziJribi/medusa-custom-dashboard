import { useTranslation } from "react-i18next"
import { Container, Heading, Text } from "@medusajs/ui"


export const Home = () => {

  const { t } = useTranslation()

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <Heading>{t("home.domain")}</Heading>
          <Text className="text-ui-fg-subtle" size="small">
            {t("home.welcome")}
          </Text>
        </div>
      </div>
    </Container>
  )
}
