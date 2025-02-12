import { OauthService } from "../../../../services"

/**
 * @oas [get] /apps
 * operationId: "GetApps"
 * summary: "List applications"
 * description: "Retrieve a list of applications."
 * x-authenticated: true
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request GET 'https://medusa-url.com/admin/apps' \
 *       --header 'Authorization: Bearer {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - App
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          properties:
 *            apps:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/OAuth"
 *  "400":
 *    $ref: "#/components/responses/400_error"
 *  "401":
 *    $ref: "#/components/responses/unauthorized"
 *  "404":
 *    $ref: "#/components/responses/not_found_error"
 *  "409":
 *    $ref: "#/components/responses/invalid_state_error"
 *  "422":
 *    $ref: "#/components/responses/invalid_request_error"
 *  "500":
 *    $ref: "#/components/responses/500_error"
 */
export default async (req, res) => {
  const oauthService: OauthService = req.scope.resolve("oauthService")
  const data = await oauthService.list({})

  res.status(200).json({ apps: data })
}
